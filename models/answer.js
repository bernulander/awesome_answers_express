'use strict';
module.exports = function(sequelize, DataTypes) {
  var Answer = sequelize.define('Answer', {
    content: DataTypes.TEXT,
    QuestionId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Answer.belongsTo(models.Question);
      }
    }
  });
  return Answer;
};
