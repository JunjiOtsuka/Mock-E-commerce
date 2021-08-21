const express = require('express')
// const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

// mongoose.connect('mongodb://localhost/product', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
// });

app.use(express.json())
app.use(express.urlencoded( {extended: false} ))
app.use(cors())

const productSchema = [
    {
        id: 1,
        name: "banana",
        description: "banana",
        inStock: 5,
        cartQty: 1,
    },
    {
        id: 2,
        name: "guitar",
        description: "acoustic guitar",
        inStock: 2,
        cartQty: 1,
    },
    {
        id: 3,
        name: "apple",
        description: "apple",
        inStock: 10,
        cartQty: 1,
    },
]

app.get('/', async (req, res) => {
    await res.send(productSchema)
})

app.post('/shopping', (req, res) => {
    const reduceStockBy = req.body.shoppingCart
    productSchema.map(item => {
        if (item.id === reduceStockBy.id) {
            item.inStock = item.inStock - reduceStockBy.cartQty
        }
    })
    res.redirect("/")
})

app.listen(3001, () => {
    console.log("Server Started")
})