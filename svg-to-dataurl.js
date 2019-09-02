const fs = require("fs");

const svgToDataURL = require('svg-to-dataurl')
const svgFile = process.argv[2];
const svg = fs.readFileSync(svgFile);
const dataUrl = svgToDataURL(svg)
console.log(dataUrl)