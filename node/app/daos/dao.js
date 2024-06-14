const daoCommon = require('./common/daoCommon');

const companyDao = {
    ...daoCommon, ...require('./api/companyDao')
};

const developerDao = {
    ...daoCommon, ...require('./api/developerDao')
};

const gamesDao = {
    ...daoCommon, ...require('./api/gamesDao')
};

const genreDao = {
    ...daoCommon, ...require('./api/genreDao')
};

// module.exports = {developerDao}

    module.exports = { 
        companyDao, 
        developerDao, 
        gamesDao, 
        genreDao };