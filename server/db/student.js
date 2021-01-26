const database = require('./database');
const Sequelize = require('sequelize')

const Student = database.define('student', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty:true
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty:true
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://via.placeholder.com/150/text=Photo+Placeholder'
    },
    gpa: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
        validate: {
            min: 0.0,
            max: 4.0
        }
    }
});


module.exports = Student;