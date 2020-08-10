
const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "COVID Cases Alert API",
        version: `${process.env.VERSION}`
    });
});

module.exports = router;
