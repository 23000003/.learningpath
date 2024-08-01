const queries = require('../db/query')

let getCategory;

const viewAllCategory = async(req, res) =>{
    const category = await queries.FetchAllCategory();
    getCategory = category;
    res.render('categories', {category: category});
}

const viewCategory = async (req, res) =>{
    const cat = req.params.cat_name;
    const Fetched = await queries.FetchItems(cat);
    console.log(Fetched, cat);
    res.render('viewCategories', {item: Fetched});
}

module.exports = { viewAllCategory, viewCategory }