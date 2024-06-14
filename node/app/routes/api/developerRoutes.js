const express = require('express')
const router = express.Router()

const {developerDao: dao} = require('../../daos/dao');

router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
});

module.exports = router