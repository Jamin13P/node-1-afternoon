const express = require("express")
const getProducts = require("./getProducts")
const getProduct = require("./getProduct")

const app = express()

const SERVER_PORT = 3333

app.get("/api/products", getProducts)

app.get("/api/product/:id", getProduct)

app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))