const express = require("express")
const body_parser = require("body-parser");
const contacts = require("./contacts");
const { request, response } = require("express");
const aboutMe = require("./aboutMe");
const shop = require("./shop");
const sponsors = require("./sponsors")
const app = express();

app.use(body_parser.urlencoded({ extended: false}))

app.get('/', (request, response) => {
    
})

app.get('/conctact', (request, response) => {
    const student = {
        name: 'Vlad',
        surname: 'Lobodovskiy',
        age: '17',
        class: "is-22-11"
    }
    response.send(contacts)
})

app.get('/aboutMe', (request, response) => {
    response.send(aboutMe)
})

app.get('/shop', (request, response) => {
    response.send(shop)
})

app.get('/sponsors', (request, response) => {
    response.send(sponsors)
})

app.listen(8000, () => {
    console.log("Сервер запущен на порту 8000.")
})