const express = require('express'); 
const app = express() 
const port = 3000 

const dataSource = require('./connect/connect').dataSource;
const categoryRoute = ('./routes/category.route')

app.use(express.json());

app.use('/api/categories', categoryRoute);

app.listen(port, () => { 
    console.log(`Server is Up`) 
});