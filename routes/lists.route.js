const {Router} = require('express')
const config = require('config')
const List = require('../models/List')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/generate', async (req, res) => {
    try {
        const baseUrl = config.get('baseUrl')
        
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова...'})
    }
})

router.get('/', auth, async (req, res) => {
    try {
        const list = await List.find({owner: req.owner.id})
        res.json(list)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова...'})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const list = await List.findById(req.params.id)
        res.json(list)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова...'})
    }
})

module.exports = router