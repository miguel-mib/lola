#! /usr/bin/env node
const yargs = require("yargs");
const utils = require("./utils");

const options = yargs
  // .usage()
  .option("r", {
    alias: "runes",
    describe: "Get champion runes.",
    type: "boolean",
    demandOption: false,
  })
  .option("i", {
    alias: "items",
    describe: "Get champion items",
    type: "boolean",
    demandOption: false,
  })
  .help(true).argv;

const words = yargs.argv._;
const champion = words[0];

if (words.length !== 1) {
  console.log("\nERROR: Champion name must be one word.");
  console.log("Try:  lola --help\n      lola --h\n");
  process.exit();
}

if (yargs.argv.r == true || yargs.argv.runes == true) {
  console.log(champion);
}
