const {Schema, model} = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        required: true
    },

    completed: {
        type: Boolean,
        default: false //дефолтное значение таблицы: ложь (типа мы не сделали еще эту тудушку)
    }
})

module.exports = model('Todo', schema)

