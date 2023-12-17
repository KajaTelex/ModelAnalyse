module.exports = (sequelize, DataTypes) => {
    const KurtaSet = sequelize.define("kusthaSet", {
        Design : {
            type : DataTypes.STRING,
        allowNull : false,
        },
       material : {
        type: DataTypes.STRING,
        alloeNull : false
       },
       price: {
        type : DataTypes.INTEGER,
        allowNull: false,
       },

       Offer: {
        type : DataTypes.DOUBLE,
        allowNull: false,
       },

       description : {
        tyepe: DataTypes.TEXT,
        allowNull : false
       }


    });

    return KurtaSet;
}

