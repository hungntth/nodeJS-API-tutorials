'use strict';

const faker = require("faker");

module.exports = {
  async up(queryInterface, Sequelize) {

    const items = fakeItems(100);

    return queryInterface.bulkInsert('Products', items, {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

const fakeItems = (rowCount) => {
  const data = []

  for (let k = 0; k < rowCount; k++) {
    const newItem = {
      name: faker.commerce.productName,
      desc: "This is test desc " + (k + 1),
      amount: faker.commerce.price,
      status: faker.random.arrayElement(["active", "inactive"]),
    };
    data.push(newItem);
  }
  return data;
}