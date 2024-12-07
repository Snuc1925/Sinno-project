const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Post = sequelize.define("Post", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    }, 
    content: {
        type: DataTypes.TEXT,
        allowNull: true,
    }
}, {
    timestamps: true
});

module.exports = Post;