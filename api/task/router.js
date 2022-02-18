// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        const task = await Tasks.getTasks();
        res.status(200).json(task);
    }catch (error){
        next(error);
    }
})

router.post("/", (req, res, next) => {
    Tasks.insert(req.body)
        .then(task =>{
            res.status(201).json(task);
        }) .catch(next)
})

module.exports = router;