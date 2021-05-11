const fs = require("fs");

const vendor = "./dist/microfrontend-one/vendor.js";
const polyfill = "./dist/microfrontend-one/polyfills.js";
const runTime = "./dist/microfrontend-one/runtime.js";
const main = "./dist/microfrontend-one/main.js";

const files = [vendor, polyfill, runTime, main];

let content = "";

files.forEach((file) => {
  try {
    const fileContent = fs.readFileSync(file).toString();
    content += "\n" + fileContent;
  } catch (err) {}
});

fs.writeFileSync("./dist/microfrontend-one/single-bundle.js", content);
console.log("DONE!!");
