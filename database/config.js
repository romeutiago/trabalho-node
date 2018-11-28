module.exports = function(){

    const Sequelize = require('sequelize');

    var sequelize = new Sequelize('api', null, null, {
        dialect: "sqlite",
        storage: './banco.sqlite',
    });

    sequelize
    .authenticate()
    .then(function(err) {
        console.log('Conexão estabelecida com o banco de dados');
    }, function (err) {
        console.log('Não foi possível conectar no banco de dados', err);
    });

    return sequelize;
}