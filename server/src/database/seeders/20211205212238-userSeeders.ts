import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
          name: "Ruan Doe",
        },
        {
          id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12",
          name: "Emerson Doe",
        },
        {
          id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13",
          name: "Clécio Doe",
        },
      ],
      {}
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete("users", {});
  },
};
