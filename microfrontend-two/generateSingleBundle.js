const fs = require("fs");

const vendor = "./dist/microfrontend-two/vendor.js";
const polyfill = "./dist/microfrontend-two/polyfills.js";
const runTime = "./dist/microfrontend-two/runtime.js";
const main = "./dist/microfrontend-two/main.js";

const files = [vendor, polyfill, runTime, main];

let content = "console.log('MFE2 :::::::::: loaded single bundle');";

files.forEach((file) => {
  try {
    const fileContent = fs.readFileSync(file).toString();
    content += "\n" + fileContent;
  } catch (err) {}
});

fs.writeFileSync("./dist/microfrontend-two/single-bundle-two.js", content);
console.log("DONE!!");
