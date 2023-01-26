require('dotenv').config()
const express = require('express');
const mongodb = require("./database/database");
const app = express();
app.use(express.json());
const PORT=5000||process.env.PORT;

mongodb.createDbConnection();


// Import Routes
const agencyRoutes = require("./router/agencyRoutes");
const clientRoutes = require("./router/clientRoutes");



app.use("/api", agencyRoutes);
app.use("/api", clientRoutes);


app.listen(PORT, () => {
    console.log(`Server is runing on port: ${PORT}`);
})