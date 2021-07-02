const express = require('express') //подключение express
const mongoose = require('mongoose') //подключение mongoose
const exphbs = require('express-handlebars') //подключение шаблонизатора

const PORT = 3000 //на каком порту идет запуск

const app = express() //создание объекта приложения
const hbs = exphbs.create.create({
    defaultLayout: 'main',
    extname: 'hbs' //смена формата (расширение после точки теперь будет .hbs)
})

app.engine('hbs', hbs.engine) //регистрация движка hbs
app.set('view engine', 'hbs')
app.set('views', 'views')

async function start() { //подключение базы данных mongoose
    try{
        await mongoose.connect('', {
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