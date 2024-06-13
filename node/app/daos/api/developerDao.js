const con = require('../../config/dbconfig');

const developerDao = {

    table: 'developer',

    getDev: (req, res, table) => {
        con.execute(
            `SELECT dev.developer_id, dev.lName, dev.fName, dev.alias
            FROM developer dev;`,
            // I think the JOIN thing is to be used on tables that use FOREIGN KEYS
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

// everything else like the "sortById" is just used for functions on the site. Right now, just focus on getting an API working and maybe do sorting methods later.

module.exports = developerDao;

//ready