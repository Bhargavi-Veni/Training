const { Sequelize } = require('sequelize');
module.exports = (sequelize)=> {
    return sequelize.define('student', {
        //  id: {
        //      type: Sequelize.INTEGER,
        //      allowNull: false,
        //      primaryKey: true
        //  },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        gender: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        tableName: 'student',
        // schema: 'studentDetails',
        timestamps: false
    });
}