'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Emails', {
            // name: STRING,
            // rollNo: INTEGER,
            // email: STRING,
            // password: STRING
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            emailAdress: {
                type: Sequelize.STRING(150),
                allowNull: false
            },
            UserId: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: "Users"
                    },
                    key: "id"
                },
                allowNull: false
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Emails');
    }
};