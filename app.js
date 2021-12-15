const express = require('express');
const app = express();
const mime = require('mime');
const path = require('path')
const xl = require('excel4node')

const router = express.Router()

const headerColumns = ["Teste", "Email", "PEDRO"]

const data = [
    {name:"messi",email:"sgduyasd@giojsij", phone: "77777"},
    {name:"MESSI",email:"sgduyasd@giojsij", phone: "7777"},
    {name:"PEDROO",email:"sgduyasd@giojsij", phone: "6666"},
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

    router.get("/messi", (req, res, next) => {
        createExcelFile()
        const file = __dirname+"/messi.xlsx"
        const fileName = path.basename(file)
        const mimeType = mime.getType(file)
        res.setHeader("Content-Disposition", "attachment;filename=" + fileName)
        res.setHeader("Content-Type", mimeType)


        setTimeout(() => {
            res.download(file)
        }, 2000);
    })

app.use('/', router)
app.listen(3000, () => {

})
