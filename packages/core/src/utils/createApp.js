import fs from 'fs-extra';
import path from 'path';
import ejs, { clearCache } from 'ejs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { confirm, input, select } from '@inquirer/prompts';
import chalk from 'chalk';
import ora from 'ora';
import boxen from 'boxen';
import { exec } from 'child_process';

// 设置输入模式为原始模式
process.stdin.setRawMode(true);

// 监听键盘输入，避免选择阶段需要多次 Ctrl+C 退出
process.stdin.on("data", async (key) => {
	// 检测到 Ctrl+C
	if (key[0] === 3) {
        const shouldContinue = await confirm({
            message:"⌨️  Ctrl+C pressed - Exiting the program",
        });
        if(shouldContinue) {
            process.exit(1);
        }
	}
});

// 创建项目文件
const makeDirectory = async (name, template, options) => {
	// 当前命令行选择的目录
    const cwdUrl  = process.cwd();
    // 需要创建的目录地址
    const targetDir  = path.join(cwdUrl, name)

	// 当前模块文件的路径
	const __filename = fileURLToPath(import.meta.url);
	// 当前模块文件所在目录的路径
    const __dirname = dirname(__filename);
	
	console.log('options', targetDir, fs.existsSync(targetDir) && !options.force)
    // 如果存在同名文件,且没有输入 -f,
    if (fs.existsSync(targetDir) && !options.force) {
        const shouldContinue = await confirm({
            message:
                chalk.bold.cyan("是否覆盖当前目录中同名文件夹？"),
            });

        // 删除已存在文件并创建新文件
        if (shouldContinue === true) {
        	await fs.remove(targetDir)
        } else process.exit(1);
    }

	try {
		await fs.mkdirsSync(targetDir);
		console.log( chalk.bold.green("🚀 文件夹创建成功"));
		const destUrl = path.join(path.resolve(__dirname, '../../../../templates'), template)
		handleDirectory(destUrl, targetDir, name).then(() => {
            console.log(chalk.green('项目创建完成，开始进行初始化'));
            // createSuccessInfo(name);
            projectInstall(targetDir, name)
        })
        .catch(error => {
            console.error('复制目录时出错:', error);
        });
       
	} catch (err) {
		console.error(chalk.bold.bgRed('文件夹创建失败:'), err);
	}
};

// 选择的配置(可后续添加配置)
const getTableInfo = async (name) => {
    const selectTemplate = await select({
        message: 'Select a package manager',
        choices: [
            {
                name: 'react-template',
                value: 'react-template',
                description: '无导航模板，主要为设备端模板库 🚀',
            },
            {
                name: 'react-template-navigate',
                value: 'react-template-navigate',
                description: '带有导航模板，主要为PC端模板库 🚀',
            },
            {
                name: 'micro-frontend-template-by-webpack5',
                value: 'micro-frontend-template-by-webpack5',
                description: '带有导航的微前端模板 🚀',
            },
        ],
    })

    const projectName = name ?? await input({ message: 'Enter your name' });

    return { selectTemplate, projectName }
}

export const createApp = async (name, options) => {
    const { selectTemplate, projectName } = await getTableInfo(name)

    // 创建文件和clone代码进入项目
    makeDirectory(projectName, selectTemplate, options)

}

// 复制模板项目代码
function handleDirectory(srcDirPath, destDirPath, name) {
    // 创建一个 promise，当目录处理完成时解析
    return new Promise((resolve, reject) => {
        fs.readdir(srcDirPath, (err, files) => {
            if (err) {
                console.error('Error reading directory:', err);
                return reject(err);
            }
             // 收集所有文件和目录处理的 promises
            const promises =  files.map(file => {
                console.log('file', file)
                const srcFilePath = path.join(srcDirPath, file);
                const destFilePath = path.join(destDirPath, file);

                return new Promise((resolve, reject) => {
                    fs.stat(srcFilePath, (err, stats) => {
                        if (err) {
                            console.error('Error checking file stats:', err);
                            return reject(err);
                        }
                        if (stats.isFile()) {
                            if(file === 'package-lock.json') {
                                return resolve(); // 跳过这个文件
                            }
                            // 如果是 package.json 文件，读取内容并修改 name 字段
                            if(file === 'package.json') {
                                // ejs.renderFile(srcFilePath)
                                //     .then(data => {
                                //         let packageJson = JSON.parse(data)
                                //         packageJson.name = name
                                //         fs.writeFileSync(destFilePath, JSON.stringify(packageJson, null, 4));
                                //         resolve();
                                //     })
                                //     .catch(error => {
                                //         console.error('Error rendering template:', error);
                                //         reject(error);
                                //     });
                                fs.readFile(srcFilePath, 'utf8', (err, data) => {
                                    if (err) {
                                        return reject(new Error(`读取文件时出错: ${err.message}`));
                                    }

                                    try {
                                        let packageJson = JSON.parse(data);
                                        packageJson.name = name;
                                        fs.writeFileSync(destFilePath, JSON.stringify(packageJson, null, 4));
                                        resolve();
                                    } catch (error) {
                                        reject(new Error(`处理 package.json 时出错: ${error.message}`));
                                    }
                                });
                            } else {
                                // If it's a file, render it and write the data
                                fs.readFile(srcFilePath, {name})
                                    .then(data => {
                                        fs.writeFileSync(destFilePath, data);
                                        resolve();
                                    })
                                    .catch(error => {
                                        console.error('Error rendering template:', error);
                                        reject(error);
                                    });
                            }
                        } else if (stats.isDirectory()) {
                            console.log('stats.isDirectory()', stats.isDirectory())
                            if(file === 'node_modules') {
                                return resolve(); // 跳过这个目录
                            }
                            // If it's a directory, create the directory and recursively handle its contents
                            const newDirPath = path.join(destDirPath, file);
                            console.log('newDirPath', newDirPath)
                            fs.mkdirSync(newDirPath);
                            handleDirectory(srcFilePath, newDirPath)
                            .then(resolve)
                            .catch(reject);;
                        } else {
                            console.error('未知的项目类型:', file);
                            resolve();
                        }
                    });
                })
            });

            // 等待所有 promises 解析
            Promise.all(promises)
                .then(() => {
                    return resolve()
                })
                .catch(reject);
        });
    })
}

// 安装依赖
const projectInstall = (rootDirectory, name) => {
    const spinner = ora().start();
    spinner.start(chalk.bold.cyan("The dependency package is being installed..."));
    exec(`npm install`, { cwd: rootDirectory }, (error, stdout, stderr) => {
        if (error) {
            spinner.fail(chalk.bold.red("🚀 项目初始化失败"));
            console.error(`exec error: ${error}`);
            return;
        }
        spinner.succeed(chalk.bold.green("🚀 Project initialization is complete"));
        console.log(stdout);
        console.error(stderr);
        createSuccessInfo(name);
    });
}

// 创建成功
export const createSuccessInfo = (name, packageManage="npm") => {
    const END_MSG = `${chalk.blue(
      "🎉 created project " + chalk.greenBright(name) + " Successfully",
    )}\n\n 🙏 Thanks for using Create-Tmi !`;
  
    const BOXEN_CONFIG = {
      padding: 1,
      margin: { top: 1, bottom: 1 },
      borderColor: "cyan",
      align: "center",
      borderStyle: "double",
      title: "🚀 Congratulations",
      titleAlignment: "center",
    };
  
    process.stdout.write(boxen(END_MSG, BOXEN_CONFIG));
  
    console.log("👉 Get started with the following commands:");
    console.log(`\n\r\r cd ${chalk.cyan(name)}`);
    console.log(`\r\r ${chalk.cyan(packageManage)} start \r\n`);
  }