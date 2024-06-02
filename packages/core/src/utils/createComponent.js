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

const component = [
    {
        name: 'CardList',
        value: 'CardList',
        description: '🚀 基础卡片区块模板',
    },
    {
        name: 'FormWithTitle',
        value: 'FormWithTitle',
        description: '🚀 基础表格区块模板',
    },
    {
        name: 'Navigate',
        value: 'Navigate',
        description: '🚀 导航区块模板',
    },
    {
        name: 'RobotInfo',
        value: 'RobotInfo',
        description: '🚀 机器人信息区块模板',
    },
    {
        name: 'SiteDevice',
        value: 'SiteDevice',
        description: '🚀 站点监控区块模板',
    },
    {
        name: 'TableWithPage',
        value: 'TableWithPage',
        description: '🚀 基础表格区块模板',
    },
    {
        name: 'AddInSituTable',
        value: 'AddInSituTable',
        description: '🚀 原位新增区块模板',
    },
    {
        name: 'TmiLogin',
        value: 'TmiLogin',
        description: '🚀 登录区块模板',
    },
    {
        name: 'WarehousingEntry',
        value: 'WarehousingEntry',
        description: '🚀 入库区块模板',
    },
]

// 创建组件/区块
export const createComponent = async (options) => {
    const { selectTemplate } = await getTableInfo()
    console.log('addComponent', selectTemplate)
    // 当前命令行选择的目录
    const cwdUrl  = process.cwd();
    // 当前模块文件的路径
	const __filename = fileURLToPath(import.meta.url);
    // 当前模块文件所在目录的路径
    const __dirname = dirname(__filename);
    // 区块所在文件夹
    const destUrl = path.join(path.resolve(__dirname, '../../../../blocks'), selectTemplate)

    handleDirectory(destUrl, cwdUrl).then(() => {
        createSuccessInfo(selectTemplate)
    })
    .catch(error => {
        console.error('复制目录时出错:', error);
    });
}

// 选择创建的区块
const getTableInfo = async () => {
    const selectTemplate = await select({
        message: '请选择你要新增的区块模板',
        choices: component,
    })

    return { selectTemplate }
}

// 复制模板项目代码
function handleDirectory(srcDirPath, destDirPath) {
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
                            // 如果是readme文件跳过
                            if(file === 'README.md') {
                                return resolve(); // 跳过这个文件
                            }
                            fs.readFile(srcFilePath)
                                .then(data => {
                                    fs.writeFileSync(destFilePath, data);
                                    resolve();
                                })
                                .catch(error => {
                                    console.error('Error rendering template:', error);
                                    reject(error);
                                });
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

// 创建成功
export const createSuccessInfo = (name) => {
    const END_MSG = `${chalk.blue(
      "🎉 created component " + chalk.greenBright(name) + " Successfully",
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
}