const express = require("express");
const app = express();
const dotenv = require("dotenv");
const homeRouter = require("./routes/routeHome");
const createRouter = require('./routes/routeCreate');

dotenv.config({ path: './e.env' });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// route
app.use("/", homeRouter);
app.use("/create", createRouter);


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));
