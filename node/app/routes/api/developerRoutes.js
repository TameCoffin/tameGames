const express = require('express')
const router = express.Router()

const {developerDao: dao} = require('../../daos/daoCommon');

router.get('/', (req, res)=> {
    dao.findAll(req, res, dao.table)
});

module.exports = router