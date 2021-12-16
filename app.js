const express = require('express')
const app = express();
const mime = require('mime')
const path = require('path')
const xl = require('excel4node')

const router = express.Router()

const headerColumns = ["Produto", "Cidade", "ID"]

const data = [
    { name: "aadfas", email: "aaaa@fasasas.com", phone: "asfasf" },
    { name: "fasas", email: "bbb@afsasafs.com", phone: "afsasf" },
    { name: "aadfas", email: "aaaa@fasasas.com", phone: "asfasf" },
    { name: "fasas", email: "bbb@afsasafs.com", phone: "afsasf" },
    { name: "aadfas", email: "aaaa@fasasas.com", phone: "asfasf" },
    { name: "fasas", email: "bbb@afsasafs.com", phone: "afsasf" },

]

const createExcelFile = () => {
    const wb = new xl.Workbook()
    const ws = wb.addWorksheet("Kullanicilar")
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
    wb.write("Messi.xlsx")

}

router.get("/MessiExcel", (req, res, next) => {
    createExcelFile()
    const file = __dirname + "/Messi.xlsx"
    const fileName = path.basename(file)
    const mimeType = mime.getType(file)
    res.setHeader("Content-Disposition", "attachment;filename=" + fileName)
    res.setHeader("Content-Type", mimeType)

    setTimeout(() => {
        res.download(file)
    }, 2000);



})

/* app.use('/', router)
app.listen(3000, () => {

}) */