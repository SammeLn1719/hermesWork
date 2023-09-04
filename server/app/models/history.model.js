module.exports = (sequelize, Sequelize) => {
    const History = sequelize.define("history", {
        quantity: {
            type: Sequelize.INTEGER
        },
        cost: {
            type: Sequelize.DOUBLE
        }
    });

    return History;
};