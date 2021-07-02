const express = require('express') //подключение express

const PORT = 3000 //на каком порту идет запуск

const app = express() //создание объекта приложения

app.listen(PORT, () => {
    console.log('Server has been started..')
})