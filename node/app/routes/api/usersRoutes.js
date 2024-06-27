const express = require('express')
const router = express.Router()

const { usersDao: dao } = require('../../daos/dao')

router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

router.get('/count', (req, res)=> {
    dao.countAll(res, dao.table)
})

router.get('/sort', (req, res)=> {
    dao.sort(res, dao.table)
})

router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table)
})

router.post('/create', (req, res)=> {
    dao.create(res, dao.table)
})

router.patch('/update', (req, res)=> {
    dao.update(res, dao.table)
})

module.exports = router