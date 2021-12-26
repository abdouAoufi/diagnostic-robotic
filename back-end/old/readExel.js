const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");

const dataDirectory = path.join(process.cwd(), "/data/input");

// const fileNames = fs.readdirSync(path.join(dataDirectory, "class0"))




const workbook = XLSX.readFile(path.join(dataDirectory, "all-data.xlsx"));
var sheet_name_list = workbook.SheetNames;
var allData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);


writeJsonData(JSON.stringify() , "allData");































function writeJsonData(input, fileName) {
    fs.writeFile(path.join(dataDirectory, `../Output/Json/${fileName}.json`), JSON.stringify(input), () => { console.log("File is ready") })
}

 


