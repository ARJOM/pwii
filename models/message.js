module.exports = (sequelize, Sequelize) => {
  const Message = sequelize.define('Message', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        allowEmpty: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false,
        allowEmpty: false
    }
  });

  return Message;
};
