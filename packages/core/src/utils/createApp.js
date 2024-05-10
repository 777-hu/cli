import fs from 'fs-extra';
import path from 'path';
import ejs, { clearCache } from 'ejs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { confirm, input, select } from '@inquirer/prompts';
import chalk from 'chalk';
import ora from 'ora';

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
		handleDirectory(destUrl, targetDir, name)
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
    fs.readdir(srcDirPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }
        files.forEach(file => {
            console.log('file', file)
            const srcFilePath = path.join(srcDirPath, file);
            const destFilePath = path.join(destDirPath, file);
            fs.stat(srcFilePath, (err, stats) => {
                if (err) {
                    console.error('Error checking file stats:', err);
                    return;
                }
                if (stats.isFile()) {
                    if(file === 'package-lock.json') {
                        return
                    }
                    // 如果是 package.json 文件，读取内容并修改 name 字段
                    if(file === 'package.json') {
                        ejs.renderFile(srcFilePath)
                            .then(data => {
                                let packageJson = JSON.parse(data)
                                packageJson.name = name
                                fs.writeFileSync(destFilePath, JSON.stringify(packageJson, null, 4));
                            })
                            .catch(error => {
                                console.error('Error rendering template:', error);
                            });
                        return
                    }
                    // If it's a file, render it and write the data
                    ejs.renderFile(srcFilePath, {name})
                        .then(data => {
                            fs.writeFileSync(destFilePath, data);
                        })
                        .catch(error => {
                            console.error('Error rendering template:', error);
                        });
                } else if (stats.isDirectory()) {
                    console.log('stats.isDirectory()', stats.isDirectory())
                    if(file === 'node_modules') {
                        return
                    }
                    // If it's a directory, create the directory and recursively handle its contents
                    const newDirPath = path.join(destDirPath, file);
                    console.log('newDirPath', newDirPath)
                    fs.mkdirSync(newDirPath);
                    handleDirectory(srcFilePath, newDirPath);
                } else {
                    console.error('Unknown item type:', file);
                }
            });
        });
    });
}