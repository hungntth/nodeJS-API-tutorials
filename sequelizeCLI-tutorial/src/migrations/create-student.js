'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Students', {
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
            name: {
                type: Sequelize.STRING(150),
                allowNull: false
            },
            rollNo: {
                type: Sequelize.INTEGER,
            },
            email: {
                type: Sequelize.STRING(150)
            },
            password: {
                type: Sequelize.STRING(250)
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Students');
    }
};