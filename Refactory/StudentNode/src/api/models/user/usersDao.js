
const baseDao = require('../baseModel');

class userDao{

    constructor(){
    }

    async getAll() {
        try {
            const models = await baseDao.getModels();
            const userModel = models.userModel;
            const data = await userModel.findAll();
            const jsonData = data.map(e => e.toJSON());
            console.log(jsonData);
            return jsonData;
        } catch (e) {
            console.log(e);
        }
    }
    async add(item){
        const models = await baseDao.insertModels();
        const userModel = models.userModel;
        return await userModel.create({ Id: item.Id, name: item.name, gender: item.gender });
    }
    async delete(id){
        const models = await baseDao.deleteModels();
        const userModel = models.userModel;
        return userModel.destroy({
            where: {
                id: id
            }
        })
    }
    async getById(id){
        try {
            const models = await baseDao.getModels();
            const userModel = models.userModel;
            const data = await userModel.findByPk(id);
            const jsonData = data.toJSON();
            console.log(jsonData);
            return jsonData;
        } catch (e) {
            console.log("enter valid id");
        }
    }
    async put(idT, item){
        const models = await baseDao.updateModels();
        const userModel = models.userModel;
        return userModel.update(
            { name: item.name, gender: item.gender  },
            {where : {id : idT}}
        )
    }
}

module.exports = new userDao();