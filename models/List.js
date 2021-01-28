const {Schema, model, Types} = require('mongoose')

const schema = new Schema ({
    id: {type: String, unique: true},
    listId: {type: String, unique: true},
    text: {type: String, required: true},
    isDone: {type: Boolean},
    owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('List', schema)