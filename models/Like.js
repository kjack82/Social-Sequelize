const { Sequelize } = require("sequelize")
const { sequelize } = require("./db")

let Like = sequelize.define('like', {
    reactionType: Sequelize.STRING,
    createdAt: Sequelize.STRING
})

module.exports = { Like,
}