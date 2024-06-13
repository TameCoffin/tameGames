const con = require('../../config/dbconfig');

const genreDao = {

    table: 'genre',

    getGenre: (req, res, table) => {
        con.execute(
            `SELECT gen.genre_id, gen.genre
            FROM genre gen;`,
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

module.exports = genreDao;