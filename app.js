const express = require('express')
const app = express()
const path = require('path')
const indexRouter = require('./routes/index.router')
const PORT = process.env.PORT || 3000


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'hbs')

app.use('/', indexRouter)

app.listen(PORT, () => console.log(`Server connected on port ${PORT}`))

