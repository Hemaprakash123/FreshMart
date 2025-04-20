const express = require("express")
const router = express.Router();
const Fruit = require('../models/fruitsModels.js')
router.get("/", async (req, res) => {
    try {
        const fruits = await Fruit.find({})
        res.send(fruits);

    }
    catch (error) {
        res.status(400).json({ message: error.message })

    }
})

router.post("/addfruit", async (req, res) => {
    const fruit = req.body.fruit
    try {
        const newfruit = new Fruit({
            name: fruit.name,
            price: fruit.price,
            image: fruit.image,
            description: fruit.description,
            category: fruit.category
        })
        await newfruit.save()
        res.send('new fruit added successfully')
    } catch (error) {
        return res.status(400).json({ message: error })
    }

})

// fruitsRoutes.js
router.get("/getfruitbyid/:fruitid", async (req, res) => {
    const { fruitid } = req.params;
    try {
        const fruit = await Fruit.findOne({ _id: fruitid });
        if (!fruit) {
            return res.status(404).json({ message: "Fruit not found" });
        }
        res.send(fruit);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

router.post("/editfruit", async (req, res) => {
    const editedfruit = req.body.editedfruit
    try {
        const fruit=await Fruit.findOne({_id:editedfruit._id})

        fruit.name=editedfruit.name,
        fruit.description=editedfruit.description,
        fruit.image=editedfruit.image,
        fruit.category=editedfruit.category,
        fruit.price=editedfruit.price

        await fruit.save()
        res.send('fruit details edited successfully')

    } catch (error) {
        res.status(400).json({message:error})
    }

})

router.post("/deletefruit", async (req, res) => {
    const fruitid=req.body.fruitid
    
    try {
        await Fruit.findOneAndDelete({_id:fruitid})
        res.send('Fruit Deleted Successfully')
    } catch (error) {
        res.status(400).json({message:error})
    }

})

module.exports = router