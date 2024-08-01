const queries = require('../db/query');

let getItem;

const viewAllItem = async (req, res) => {
    try {
        const item = await queries.FetchAll(); 
        console.log('Items:', item);
        getItem = item;
        res.render('items', { item });
    } catch (err) {
        console.error('Error fetching all items:', err);
        res.status(500).send('Server Error');
    }
}

const viewSingleItem = (req, res) => {
    try {
        const idx = req.params.index; 
        const item = getItem[idx]; 
        console.log("HEYYYYYYYYYYY", item);
        if (!item) {
            return res.status(404).send('Item not found'); 
        }

        const { item_name, cat_name } = item;
        res.render('viewItem', { itemName: item_name, catName: cat_name });
    } catch (err) {
        console.error('Error fetching single item:', err);
        res.status(500).send('Server Error');
    }
}

const createItem = (req, res) =>{
    res.render("createItem")
}

const postItem = async (req, res) =>{
    const data = req.body;

    const post = await queries.PostAnItem(data);

    res.redirect('/items')
}

module.exports = { viewAllItem, viewSingleItem, createItem, postItem };
