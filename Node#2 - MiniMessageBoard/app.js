const express = require("express");
const app = express();
const dotenv = require("dotenv");
const homeRouter = require("./routes/routeHome");
const createRouter = require('./routes/routeCreate');

dotenv.config({ path: './e.env' });

//this set on where the ejs file is that u want to display
app.set("views", path.join(__dirname, "views"));
//set our node to accept ejs files
app.set("view engine", "ejs");

//middleware - to set the form data into req.body data (only works for forms element)
app.use(express.urlencoded({ extended: true }));

// route
app.use("/", homeRouter);
app.use("/create", createRouter);


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));
