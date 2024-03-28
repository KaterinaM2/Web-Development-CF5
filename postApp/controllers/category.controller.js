const categoryService = require('../services/category.services');

exports.findAll = async(req, res) => {
    console.log("Find all categories");
    try {
        const result = await categoryService.findAll();
        res.status(200).json({data : result});
        console.log("Success in reading");
    } catch(err) {
        res.status(404).json({data: err});
        co21
    }
}