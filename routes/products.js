const router = require("express").Router();
const Product = require("../models/Product");

//create a new product 
router.post('/createproduct', async (req,res) => {
      const newProduct = new Product(req.body);

     try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
     } catch (error) {
        res.status(500).json(error);
     }
});

//get All products 
router.get("/", async (req,res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
         res.status(400).json(err);
    }
})

//get specific product
router.get("/:id", async (req,res) => {
    try {
        const findProduct = await Product.findById(req.params.id);
        res.status(200).json(findProduct);
    } catch (err) {
        res.status(400).json(err);
    }
});

//update specific product
router.put("/:id", async (req,res) => {
    try {
        const updateProduct = await Product.updateOne(
            {_id: req.params.id},
            {$set:req.body}

        )
        res.status(200).json(updateProduct);
    } catch (err) {
        res.status(400).json(err)
    }
})

//delete a product
router.delete("/:id", async (req,res) => {
     try {
        const deleteProduct = await Product.deleteOne({ _id : req.params.id });
        res.status(200).json(deleteProduct);
     } catch (err) {
        res.status(400).json(err)
     }
})

module.exports = router