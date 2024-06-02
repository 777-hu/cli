import boxen from "boxen";
import chalk from "chalk";

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