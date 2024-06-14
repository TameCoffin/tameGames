const con = require('../../config/dbconfig');

const companyDao = {

    table: 'company',

    getComp: (req, res, table) => {
        con.execute(
            `SELECT company_id, company_title
            FROM company;`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length == 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR', error)
                }
            } 
        )
    }
};

module.exports = companyDao;

//ready