const { pool } = require('./db')


async function FetchAll(){
    try{
        const query = `
            SELECT items.*, categories.cat_name FROM items
            INNER JOIN categories on items.cat_id = categories.id;
        `
        const { rows } = await pool.query(query);
        console.log(rows);

        return rows;
    } 
    catch(err){
        console.error(err)
        throw(err);
    }
}

async function FetchAllCategory(){
    try{
        const query = `
            SELECT * FROM categories
        `

        const {rows} = await pool.query(query);

        return rows;
    }catch(err){
        console.error(err);
        throw(err);
    }
}

async function FetchItems(category){
    try{
        const query = `
            SELECT items.*, categories.cat_name FROM items
            INNER JOIN categories on items.cat_id = categories.id
            WHERE categories.cat_name = $1
        `
        //it should be rows
        // [category] is like a replacer for $1 (placeholder)
        // if theres 'AND' in query just make a variable that contains both
        //ex. const category = ['Shirt', 'Pants']
        const { rows } = await pool.query(query, [category]);
        console.log(rows);

        return rows;
    } 
    catch(err){
        console.error(err)
        throw(err);
    }
}


async function PostAnItem(data){

    try{
        await pool.query(
            'INSERT INTO items (item_name, item_cat) VALUES ($1, $2)',
            [data.item_name, data.item_cat]
          )
    }catch (err) {
        console.error(err);
        throw err
    }

}

module.exports = {FetchItems, FetchAll, FetchAllCategory, PostAnItem}