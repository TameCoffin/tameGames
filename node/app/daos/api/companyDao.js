const con = require('../../config/dbconfig');

const companyDao = {

    table: 'company',

    getComp: (req, res, table) => {
        con.execute(
            `SELECT comp.company.id, comp.company_title
            FROM company comp;`,
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