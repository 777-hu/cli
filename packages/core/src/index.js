#!/usr/bin/env node

import { Command } from 'commander'
import { input, select, Separator, checkbox, confirm, expand, rawlist } from '@inquirer/prompts';
import figlet from 'figlet' 
import chalk from 'chalk' 
import path, { join } from 'path';
import ora from 'ora';
import fs, { readFileSync } from 'fs';
import ejs, { clearCache } from 'ejs';
import inquirer from 'inquirer'

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createApp } from './utils/createApp.js';
import { createComponent } from './utils/createComponent.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const program = new Command();

program
	.version(chalk.greenBright(JSON.parse(
		readFileSync(join(__dirname, '../../../package.json')).toString(),
	).version))
	.description("Create a directory for your project files")
	.option("-d, --debug", "是否开启调试模式", false)
	.option("-f, --force", "Overwrite target directory if it exists", false)
	.option("--dev", "Use development mode")
// .option('-p, --port <number>', 'port number', 80)
// .option('-l, --list <items>', 'comma separated list', commaSeparatedList)

program
	.command('create [project-name]')
	.description('Use create directly to directly select a template for generation.')
	.action((name, options) => {
		createApp(name, options)
	})

program
	.command('addComponent')
	.description('Generate block template')
	.action((options) => {
		createComponent(options)
	})

program.parse(process.argv);

// const answer = {
// 	inputAnswer: await input({ message: 'Enter your name' }),
// 	selectAnswer: await select({
// 		message: 'Select a package manager',
// 		choices: [
// 		{
// 			name: 'npm',
// 			value: 'npm',
// 			description: 'npm is the most popular package manager',
// 		},
// 		{
// 			name: 'yarn',
// 			value: 'yarn',
// 			description: 'yarn is an awesome package manager',
// 		},
// 		new Separator(),
// 		{
// 			name: 'jspm',
// 			value: 'jspm',
// 			disabled: true,
// 		},
// 		{
// 			name: 'pnpm',
// 			value: 'pnpm',
// 			disabled: '(pnpm is not available)',
// 		},
// 		],
// 	}),
// 	checkboxAnswer: await checkbox({
// 		message: 'Select a package manager',
// 		choices: [
// 			{ name: '(1)npm', value: 'npm' },
// 			{ name: '(2)yarn', value: 'yarn' },
// 			new Separator(),
// 			{ name: 'pnpm', value: 'pnpm', disabled: true },
// 			{
// 			  name: 'pnpm',
// 			  value: 'pnpm',
// 			  disabled: '(pnpm is not available)',
// 			},
// 		  ],
// 		required: true,
// 	}),
// 	confirmAnswer: await confirm({ message: 'Continue?' }),
// 	Answer: await expand({
// 		message: 'Conflict on file.js',
// 		default: 'y',
// 		expanded: true,
// 		choices: [
// 		  {
// 			key: 'y',
// 			name: 'Overwrite',
// 			value: 'overwrite',
// 		  },
// 		  {
// 			key: 'a',
// 			name: 'Overwrite this one and all next',
// 			value: 'overwrite_all',
// 		  },
// 		  {
// 			key: 'd',
// 			name: 'Show diff',
// 			value: 'diff',
// 		  },
// 		  {
// 			key: 'x',
// 			name: 'Abort',
// 			value: 'abort',
// 		  },
// 		],
// 	}),
// 	rawlistAnswer: await rawlist({
// 		message: 'Select a package manager',
// 		choices: [
// 		  { name: 'npm', value: 'npm' },
// 		  { name: 'yarn', value: 'yarn' },
// 		  { name: 'pnpm', value: 'pnpm' },
// 		],
// 	}),
// };

// inquirer.prompt([
// 	{
// 	  type: 'input', //type：input,confirm,list,rawlist,checkbox,password...
// 	  name: 'name', // key 名
// 	  message: 'Your name', // 提示信息
// 	  default: 'my-node-cli' // 默认值
// 	}
//   ]).then(answers => {
// 	console.log('answers', answers)
//   })
  

// const spinner = ora('Loading unicorns').start();

// setTimeout(() => {
// 	spinner.color = 'yellow';
// 	spinner.text = 'Loading rainbows';
// }, 1000);
// setTimeout(() => {
// 	spinner.stop()
// }, 5 * 1000);


// const destUrl = path.join(path.resolve(__dirname, '../'), 'template')
// const cwdUrl = process.cwd()
// console.log('destUrl', destUrl)
// console.log('cwdUrl', cwdUrl)
// fs.readdir(destUrl, (err, files) => {
// 	if(err) return console.log('err', err);
// 	files.forEach(file => {
// 		console.log(';file', path.join(destUrl, file))
// 		ejs.renderFile(path.join(destUrl, file), {name: answer.inputAnswer}).then(data => {
// 			console.log('data', data)
// 			fs.writeFileSync(path.join(cwdUrl, file), data)
// 		}).catch(error => {
// 			console.error('渲染模板时出错:', error);
// 		})
// 	})
// })



// figlet("Hello World!!", function (err, data) {
// 	if (err) {
// 	  console.log("Something went wrong...");
// 	  console.dir(err);
// 	  return;
// 	}
// 	console.log(data);
//   });


// .command('install [name]', 'install one or more packages').alias('i')