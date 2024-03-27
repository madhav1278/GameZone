const express = require('express');
const router = express.Router();
const user = require('./../models/user');
const db = require('./../db');

router.post('/', async (req, res) => {
    const f_name = req.body.f_name
    const user_name = req.body.user_name
    const email = req.body.email
    const phone_no = req.body.phone_no
    const password = req.body.password
    const conf_password = req.body.conf_password
    const gender = req.body.gender

    const data = {
        "f_name": f_name,
        "user_name": user_name,
        "email": email,
        "phone_no": phone_no,
        "password": password,
        "conf_password": conf_password,
        "gender": gender
    }
    db.collection('user').insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("inserted");
    })
    return res.send('data save')
})




module.exports = router;