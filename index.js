const express = require('express') //подключение express
const mongoose = require('mongoose') //подключение mongoose
const exphbs = require('express-handlebars') //подключение шаблонизатора
const portfolioRoutes = require('./routes/portfolio') //подключение routes

const PORT = 3000 //на каком порту идет запуск

const app = express() //создание объекта приложения
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs' //смена формата (расширение после точки теперь будет .hbs)
})

app.engine('hbs', hbs.engine) //регистрация движка hbs
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(portfolioRoutes)

async function start() { //подключение базы данных mongoose
    try{
        await mongoose.connect(
            'mongodb+srv://ortamfag:1QAZxsw23edc@portfolio.7ks7u.mongodb.net/portfolio', 
        {
            useNewUrlParser: true,
            useFindAndModify: false
        })

        app.listen(PORT, () => {
            console.log('Server has been started..')
    })

    }   catch (e) {
        console.log(e)
    }
}

start() //вызов функции