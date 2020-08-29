const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))

app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})


app.post('/', (req, res) => {
  const target = req.body.target
  console.log(target)
  res.render('index')
})


app.listen(port, () => {
  console.log(`The trash talk generator is running on http://localhost:${port}`)
})

