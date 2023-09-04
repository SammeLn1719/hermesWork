module.exports = (sequelize, Sequelize) => {
    const Bascet = sequelize.define("bascet", {
      quantity: {
        type: Sequelize.INTEGER
      },
    });
  
    return Bascet;
  };