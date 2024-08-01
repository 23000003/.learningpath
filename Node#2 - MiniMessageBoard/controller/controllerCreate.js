

const messages = require('./controllerHome').messages;

const viewPost = (req, res) =>{
    res.render("create");
    console.log("hey");
}

const createPost = (req, res) =>{
    const name = req.body.name;
    const text = req.body.text;

    console.log(name)
    console.log(text)

    messages.push({user: name, text: text, added: new Date()});

    res.redirect("/");
}

module.exports = {viewPost, createPost};