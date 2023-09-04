module.exports = (sequelize, Sequelize) => {
    const Brand = sequelize.define("brand", {
      name: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.STRING
      }
    });
  
    return Brand;
  };