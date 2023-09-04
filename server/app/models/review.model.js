module.exports = (sequelize, Sequelize) => {
    const Review = sequelize.define("review", {
      text: {
        type: Sequelize.STRING
      },
      mark: {
        type: Sequelize.STRING
      },
    });
  
    return Review;
  };