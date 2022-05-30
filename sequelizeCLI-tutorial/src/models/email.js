'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Email extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Email.belongsTo(models.User)
        }
    }
    Email.init({
        emailAdress: DataTypes.STRING,
        UserId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Email',
    });
    return Email;
};