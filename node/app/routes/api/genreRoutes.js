const express = require('express')
const router = express.Router()

const {genreDao: dao} = require('../../daos/dao');

router.get('/', (req, res)=> {
    dao.findAll(res, req, dao.table)
});

module.exports = router