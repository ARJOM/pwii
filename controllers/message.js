const db = require('../config/db.config');

module.exports =  {
    async index(){
        try {
            const mensagens = await db.message.findAll();
            return mensagens;
        } catch(err) {
            console.log(err);
        }
    },

    async save(data){
        try {
            await db.message.create(data);
        } catch (err){
            console.log(err)
        }
    }
}

//exports.getMessage = async(id) => {
//};
