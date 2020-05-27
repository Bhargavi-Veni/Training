const { Sequelize } = require('sequelize');
const userSchema = require('../../api/models/user/userSchema');
const { dbConfig } = require('../../config');
const sequelize = new Sequelize(
    dbConfig.dbName,
    dbConfig.dbUser,
    dbConfig.dbPassword, {
    host: dbConfig.host,
    dialect: 'mssql',
    options: { "instanceName": dbConfig.instanceName }
});
module.exports = {
    getModels: async () => {
        await sequelize.authenticate();
        console.log("connection successful")
        return {
            userModel: userSchema(sequelize)
        }
    },
    insertModels: async () => {
        await sequelize.authenticate();
        console.log("connection successful")
        return {
            userModel: userSchema(sequelize)
        }
    },
    deleteModels: async () => {
        await sequelize.authenticate();
        console.log("connection successful")
        return {
            userModel: userSchema(sequelize)
        }
    },
    updateModels: async () => {
        await sequelize.authenticate();
        console.log("connection successful")
        return {
            userModel: userSchema(sequelize)
        }
    }
}