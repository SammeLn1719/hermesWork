module.exports = (sequelize, Sequelize) => {
    const Blog = sequelize.define("blog", {
      name: {
        type: Sequelize.STRING
      },
      text: {
        type: Sequelize.STRING
      },
    });
  
    return Blog;
  };