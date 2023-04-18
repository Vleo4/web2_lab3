const path = require('path')

const mongo_client = require("mongodb").MongoClient;

const cors = require ("cors"); 

const db_name = "web_application";

// встановлюємо express

const express = require('express')
const parser = express.json();
const app = express()

// встановлюємо директорію для віддачі статичного контенту (каталог проекту)
app.use(express.static(__dirname))

//const mongo = new mongo_client("mongodb://localhost:27017/", { useUnifiedTopology: true });

//let db_client;


// mongo.connect((error, client) => {

//   // Виводимо в консоль можливу помилку
//   if (error) { return console.log(error); }

//   // Ініціалізуємо об'єкт <db_client>
//   db_client = client;
// })

// налаштовуємо роботу із шаблонізаотором
app.set('views', path.join(__dirname, '/static/views'))
app.set('view engine', 'pug')

// налаштовуємо маршрутизацію
app.get('/', function (request, response) {
  response.render('pages/index', { title: 'Home' })
})
app.get('/customer', function (request, response) {
  response.render('pages/customer', { title: 'Customer' })
})
app.get('/project', function (request, response) {
  response.render('pages/project', { title: 'Project' })
})
app.get('/executor', function (request, response) {
  response.render('pages/executor', { title: 'Executor' })
})
app.get('/runningproject', function (request, response) {
  response.render('pages/running_project', { title: 'Running Projects' })
})

// запускаємо аплікацію
app.listen(process.env.PORT || 8080)