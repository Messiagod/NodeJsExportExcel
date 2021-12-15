const express = require('expreess');
const app = express();
const mime = require('mime');
const xl = require('excel4node')

const router = express.Router()

const headerColumns = ["Name", "Email", "Phone"]

const data = [
    {name:"messi",email:"sgduyasd@giojsij", phone: "77777"},
    {name:"MESSI",email:"sgduyasd@giojsij", phone: "7777"},
    {name:"LEEOOO",email:"sgduyasd@giojsij", phone: "77777"},
    {name:"MESSIIIII",email:"sgduyasd@giojsij", phone: "7777"}
]

const createExcelFile = () => {
    const wb = new xl.Workbook()
    const ws = wb.addWorksheet("Messi melhor do mundo")
    let colIndex = 1
    headerColumns.forEach((item) => {
        ws.cell(1, colIndex++).string(item)
    })
    let rowIndex = 2;
    data.forEach((item) => {
        let columnIndex = 1;
        Object.keys(item).forEach((colName) => {
            ws.cell(rowIndex, columnIndex++).string(item[colName])
        })
        rowIndex++;
    })
    wb.write("messiiiiiiii.xlsx")
}
createExcelFile()

app.use('/', router)
