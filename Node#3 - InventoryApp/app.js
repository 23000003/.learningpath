const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require('path');
const itemRouter = require("./routes/itemRoute");
const categoryRouter = require('./routes/categoryRoute');

dotenv.config({ path: 'en.env' });

app.use(express.static(path.join(__dirname, 'views')));//listens tailwinds output.css
app.set('views', path.join(__dirname, 'views')); 
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// route
app.get('/', (req, res) => {
    res.render('home');
});
app.use("/items", itemRouter);
app.use("/category", categoryRouter);

console.log(process.env.DB_HOST);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));
