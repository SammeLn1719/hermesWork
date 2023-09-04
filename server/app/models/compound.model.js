module.exports = (sequelize, Sequelize) => {
    const Compound = sequelize.define("compound", {
      name: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.DOUBLE
      },
      dimension: {
        type: Sequelize.STRING
      }
    });
  
    return Compound;
  };