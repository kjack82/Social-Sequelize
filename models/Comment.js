const { Sequelize } = require("sequelize");
const { sequelize } = require("./db");

let Comment = sequelize.define('comment', {
    body: Sequelize.STRING,
    createdAt: Sequelize.STRING
});


module.exports = Comment;