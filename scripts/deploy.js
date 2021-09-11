
const moment = require("moment");
const execa = require("execa");
const fs = require("fs");

(async () => {
  try {
    await execa("git", ["checkout", "--orphan", "build"]);
    console.log("Starting build!!!");
    await execa("npm", ["run", "build"]);

    const folderName = fs.existsSync("dist") ? "dist" : "build";

    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "build on " + moment().format("dd MMM YYYY")]);

    console.log("Pushing to gh-pages...");

    await execa("cp", [folderName + "/*", "../build"])
    // await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    await execa("rm", ["-r", folderName]);
    await execa("git", ["checkout", "-f", "master"]);
    await execa("git", ["branch", "-D", "build"]);
    console.log("Successfully deployed!!!");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();
