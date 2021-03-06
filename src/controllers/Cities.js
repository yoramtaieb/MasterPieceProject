const db = require("../../models");
const { Cities } = db;

module.exports = {
  getCityById: (id) => {
    return Cities.findByPk(id, {
      attributes: ["name"],
    });
  },

  getCityByName: (name) => {
    return Cities.findOne({
      where: { name: name },
    });
  },

  getAllCities: async () => {
    const allCities = await Cities.findAll({
      attributes: ["id", "name"],
    });
    return allCities;
  },
};
