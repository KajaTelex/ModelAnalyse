const expressFrame = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");

const database = require("./config/databse");

corsOptions = {
    origin: "*",
    corsSuccessStatus : 200
};

const PORT = 5001 || process.env.PORT;

const app = expressFrame();

async function init() {
    try {
        //mysql 
        database.instanceSequelize.authenticate();
        console.log("connected to mysql database ");

        app.use(compression());

        app.use(cors(corsOptions));

        app.use(bodyParser.json());

        app.listen(PORT, function() {
            console.log("connected to server", PORT);
        })
    } catch(error) {
        console.log("database is not connected", error);
    }

    

}

init();