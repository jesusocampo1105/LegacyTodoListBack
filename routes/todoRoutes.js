const router = require("express").Router();
const Todo  = require("../models/todo");

router.get("/get/flowers", async (req, res) => {
    try {
        const allTodoFlowers = await Todo.find();
        res.status(200).json(allTodoFlowers);
    } catch (error) {
        res.json(error);
    }
});

router.post("/new/flower", async (req, res) =>{
    try {
        const newFlower = new Todo({
            flower: req.body.flower
        });
        const saveFlower = await newFlower.save();
        res.status(200).json(saveFlower);
    } catch (error) {
        console.log(error);
    }    
});

router.put("/new/flower/:id", async (req, res)=>{
    try {
        const updateFlower = await Todo.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json("Flower Updated");
    } catch (error) {
        res.json(error);
    }
});

router.delete("/new/flower/:id", async (req, res)=>{
    try {
        const deleteFlower = await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json("Flower Deleted")
    } catch (error) {
        res.json(error);
    }
});

module.exports = router;