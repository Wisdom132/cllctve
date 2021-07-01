const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require("morgan");
const dbConfig = require('./config/db')
const routes = require('./routes')
const PORT = process.env.PORT || 5000

const app = express()

class App {
    constructor() {
        this.initDB();
        this.initExpressMiddleware();
        this.initRoutes();
        this.start()
    }

    start() {
        app.listen(PORT, () => console.log(`App is running on port ${PORT}`))
    }

    initExpressMiddleware() {
        app.use(cors());
        app.use(express.json());
        app.use(morgan("dev"));
    }

    initDB() {
        mongoose.set("useCreateIndex", true);
        mongoose
            .connect(dbConfig.database, { useNewUrlParser: true })
            .then(() => {
                console.log("Database is connected");
            })
            .catch(err => {
                console.log({ database_error: err });
            });
    }

    initRoutes() {
        app.get("/", (req, res) => {
            res.json("Hello Collective");
        });

        app.use('/', routes);

    }


}
new App()
