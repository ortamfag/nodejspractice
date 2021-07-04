const { Router } = require('express') //возможность создания путей
const router = Router()

router.get('/', (req, res) => { //рендер страницы index
    res.render('index', {
        title: 'Portfolio list' //создание title для страницы index
    }) 
})

router.get('/create', (req, res) => { //рендер страницы create
    res.render('create', {
        title: 'Create portfolio' //создание title для страницы Index
    })
})

module.exports = router //экспорт наружу