const express = require('express')
const router = express.Router()

const {genreDao: dao} = require('../../daos/dao');

router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
});

module.exports = router