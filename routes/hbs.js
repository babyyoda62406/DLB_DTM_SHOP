const { Router } = require("express");
const app = Router()

app.get('/', (req, res) => {
    res.render("home", {
        name: "freedom"
    })
})
app.get('/producto', (req, res) => {
    res.render("producto", {
        name: "freedom"
    })
})
app.get('/productos', (req, res) => {
    res.render("productos", {
        name: "freedom"
    })
})
app.get('/login', (req, res) => {
    res.render("login", {
        name: "freedom"
    })
})

app.get('/contacto', (req, res) => {
    res.render("contacto", {
        name: "freedom"
    })
})

app.get('/admin', (req, res) => {
    res.render("admin", {
        name: "freedom"
    })
})

app.get('*', (req, res) => {
    res.send("Pagina no encontrada")
})


module.exports = app