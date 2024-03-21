#!/usr/bin/env node

// const {Command} = require('commander')
// const inquirer = require('inquirer')
import { Command } from 'commander'
import { input, select, Separator, checkbox, confirm, expand, rawlist } from '@inquirer/prompts';
import figlet from 'figlet' 
import ora from 'ora';

const program = new Command();
program
  .option('--no-sauce', 'Remove sauce')
  .option('--cheese <flavour>', 'cheese flavour', 'mozzarella')
  .option('--no-cheese', 'plain with no cheese')
  .parse();

const options = program.opts();
const sauceStr = options.sauce ? 'sauce' : 'no sauce';
const cheeseStr = (options.cheese === false) ? 'no cheese' : `${options.cheese} cheese`;
console.log(`You ordered a pizza with ${sauceStr} and ${cheeseStr}`);

const answer = {
	inputAnswer: await input({ message: 'Enter your name' }),
	selectAnswer: await select({
		message: 'Select a package manager',
		choices: [
		{
			name: 'npm',
			value: 'npm',
			description: 'npm is the most popular package manager',
		},
		{
			name: 'yarn',
			value: 'yarn',
			description: 'yarn is an awesome package manager',
		},
		new Separator(),
		{
			name: 'jspm',
			value: 'jspm',
			disabled: true,
		},
		{
			name: 'pnpm',
			value: 'pnpm',
			disabled: '(pnpm is not available)',
		},
		],
	}),
	checkboxAnswer: await checkbox({
		message: 'Select a package manager',
		choices: [
			{ name: '(1)npm', value: 'npm' },
			{ name: '(2)yarn', value: 'yarn' },
			new Separator(),
			{ name: 'pnpm', value: 'pnpm', disabled: true },
			{
			  name: 'pnpm',
			  value: 'pnpm',
			  disabled: '(pnpm is not available)',
			},
		  ],
		required: true,
	}),
	confirmAnswer: await confirm({ message: 'Continue?' }),
	expandAnswer: await expand({
		message: 'Conflict on file.js',
		default: 'y',
		expanded: true,
		choices: [
		  {
			key: 'y',
			name: 'Overwrite',
			value: 'overwrite',
		  },
		  {
			key: 'a',
			name: 'Overwrite this one and all next',
			value: 'overwrite_all',
		  },
		  {
			key: 'd',
			name: 'Show diff',
			value: 'diff',
		  },
		  {
			key: 'x',
			name: 'Abort',
			value: 'abort',
		  },
		],
	}),
	rawlistAnswer: await rawlist({
		message: 'Select a package manager',
		choices: [
		  { name: 'npm', value: 'npm' },
		  { name: 'yarn', value: 'yarn' },
		  { name: 'pnpm', value: 'pnpm' },
		],
	}),
};

const spinner = ora('Loading unicorns').start();

setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Loading rainbows';
}, 1000);

setTimeout(() => {
	spinner.stop()
}, 5 * 1000);

figlet("Hello World!!", function (err, data) {
	if (err) {
	  console.log("Something went wrong...");
	  console.dir(err);
	  return;
	}
	console.log(data);
  });

console.log('answer', answer)