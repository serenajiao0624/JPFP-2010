const database = require('./database');
const Sequelize = require('sequelize')

const Campus = database.define('campus', {
    name: { 
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    address:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://via.placeholder.com/150/text=Photo+Placeholder'
    },
    description: {
        type: Sequelize.STRING,
    }
});

module.exports = Campus;