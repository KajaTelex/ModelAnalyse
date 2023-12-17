

const { Sequelize, DataTypes } = require("sequelize");

 const Kurthas = require("../models/womenCLothing") ;

const instanceSequelize = new Sequelize("modelpro", "root", "Khaja05$", {
    host:"localhost",
    dialect: "mysql",
});



const instanceKurthas  = Kurthas(sequelize, DataTypes)


instanceKurthas.sync()                                                                                              
.then(() => {
    console.log(" model synchronised with mysql DB ");
})
.catch((error) =>{
    console.log("model is not sync", error);
})

module.exports = { instanceSequelize};
