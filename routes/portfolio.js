const { Router } = require('express') //возможность создания путей
const Todo = require('../models/Todo') //подключение модели Todo
const router = Router()

router.get('/', async (req, res) => { //рендер страницы index
    const todos = await Todo.find({}) //поиск всех тудушек в базе данных

    res.render('index', {
        title: 'Portfolio list', //создание title для страницы index
        isIndex: true,
        todos
    }) 
})

router.get('/create', (req, res) => { //рендер страницы create
    res.render('create', {
        title: 'Create portfolio', //создание title для страницы Index
        isCreate: true
    })
})

router.post('/create', async (req, res) => { //обработка пост запросов в /create
    const todo = new Todo({ 
        title: req.body.title //title-name of input in create.hbs
    })

    await todo.save() //сохранение todo
    res.redirect('/') //редирект на главную страницу
})

module.exports = router //экспорт наружу