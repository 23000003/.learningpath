const messages = [
    {
      text: "let me pass 2ndyear!",
      user: "WAGMI",
      added: new Date(),
    },
    {
      text: "lorem ipsum!",
      user: "Yo mama",
      added: new Date(),
    },
];

const getMessages = (req, res) =>{
    res.render("home", { messages }); 
}

const viewMessages = (req, res) =>{
    const index = req.params.index //why not req.body.index? its because u got it from a url in a-href.. body only use for form elements
    const name = messages[index].user;
    const viewMessage = messages[index].text;

    console.log(req.params.index)

    res.render("viewmsg", {name ,viewMessage});
}


module.exports = { getMessages, messages, viewMessages };