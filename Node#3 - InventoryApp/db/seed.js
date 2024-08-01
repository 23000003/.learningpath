const { client } = require('./db');

const SQL = `
    DROP TABLE IF EXISTS categories CASCADE;
    DROP TABLE IF EXISTS items CASCADE;

    CREATE TABLE categories(
        id SERIAL PRIMARY KEY,
        cat_name varchar(20),  
        cat_image text         
    );

    CREATE TABLE items(
        id SERIAL PRIMARY KEY,   
        item_name varchar(20) NOT NULL,
        cat_id integer NOT NULL,
        FOREIGN KEY (cat_id) REFERENCES categories(id)
    );

    INSERT INTO categories(cat_name, cat_image)
    VALUES
        ('Shirt', 'https://cdn.assetsmanagment.com/4/311581CC-5EC6-45C8-8F8E-777FEB66981C.jpg'),
        ('Pants', 'https://underarmour.scene7.com/is/image/Underarmour/PS1364410-001_HF?rp=standard-0pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=566&hei=708&size=566,708')
    ON CONFLICT (id) DO NOTHING;

    INSERT INTO items(item_name, cat_id)
    VALUES
        ('Pandas', 2),
        ('Gucci', 1),
        ('RedTee', 1),
        ('Slacks', 2),
        ('Van', 1),
        ('Tattered', 2)
    ON CONFLICT (id) DO NOTHING;
    `
    //ON CONFLICT (id) DO NOTHING: Skips insertion if an item with the same 'id' already exists
    // CASCADE option ensures that dependent objects (e.g., foreign keys) are also dropped
    
async function populateDb () {
    console.log('Seeding database...')
    try {
        await client.connect()
        await client.query(SQL)
        console.log('Database seeded successfully.')
    } catch (err) {
        console.error('Error seeding database:', err)
    } finally {
        await client.end()
    }
}

populateDb();