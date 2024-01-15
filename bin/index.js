#! /usr/bin/env node
const yargs = require("yargs");

const usage = "\nUsage: lola <champion> to get the champion info.";

const options = yargs
  .usage()
  .option("r", {
    alias: "runes",
    describe: "Get champion runes.",
    type: "string",
    demandOption: false,
  })
  .option("i", {
    alias: "items",
    describe: "Get champion items",
    type: "string",
    demandOption: false
  })    
  .help(true).argv;
