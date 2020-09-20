#!/usr/bin/env node

const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')
const ejs = require('ejs')

inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'Project name'
    })
    .then(anwsers => {
        const tempDir = path.join(__dirname, 'templates')
        const destDir = process.cwd()
        fs.readdir(tempDir, (err, files) => {
            files.forEach(file => {
                ejs.renderFile(path.join(tempDir, file), anwsers, (err, result) => {
                    if (err) throw err
                    fs.writeFileSync(path.join(destDir, file), result)
                })
            })
        })
    })