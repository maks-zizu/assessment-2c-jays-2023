'use strict';

/** @type {import('sequelize-cli').Migration} */

const bcrypt = require('bcrypt');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        login: 'Макс',
        password: await bcrypt.hash('1234', 10),
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Тося',
        password: await bcrypt.hash('123', 10),
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
