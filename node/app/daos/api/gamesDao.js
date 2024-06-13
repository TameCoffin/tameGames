const con = require('../../config/dbconfig');

const gamesDao = {

    table: 'games',

    getGame: (req, res, table) => {
        con.execute(
            `SELECT g.game_id, g.game_title, g.yr_released, g.cover, g.price, comp.company_id, dev.developer_id
            FROM games g
            JOIN company comp USING (company_id)
            JOIN developer dev USING (developer_id);`,
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

module.exports = gamesDao;