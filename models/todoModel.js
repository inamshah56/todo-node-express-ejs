const { DataTypes } = require('sequelize')
const { sequelize } = require('../utils/db')

const Todo = sequelize.define('Todo', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'todo_app',
    timestamps: false
});

module.exports = Todo;