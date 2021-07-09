
const express = require('express')
const exphbs  = require('express-handlebars')
const app = express()
const port = 3000
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/src', express.static(__dirname + '/src'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

