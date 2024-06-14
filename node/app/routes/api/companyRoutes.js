const express = require('express')
const router = express.Router()

const {companyDao: dao} = require('../../daos/dao');

router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
});

router.get('/count', (req, res)=> {
    dao.countAll(res, dao.table)
})

router.get('/count', (req, res)=> {
    dao.sort(res, dao.table)
})

router.get('/:id', (req, res)=> {
    dao.getInfo(res, dao.table, req.params.id)
});

router.post('/create', (req, res)=> {
    dao.create(req, res)
})

router.patch('update/:id', (req, res)=> {
    dao.update(req, res)
})

// router.get('/', (req, res) => {
//     dao.getComp(req, res, dao.table)
// })

module.exports = router