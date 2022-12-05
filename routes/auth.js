const express = require("express")
const router = express.Router()
const Users = require('../models/User')

router.get('/register', async(req, res) => {
    const user = new Users({
        username: "Graham",
        email: "grams@gmail.com",
        password: "123456"
    })
    try {
        await user.save()
        res.send('USer info was received!')
    } catch(err){
        res.send('Error: ' + err)
    }

    
})

module.exports = router
