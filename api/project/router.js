// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model');
const router = express.Router();

router.get("/", (req, res, next) => {
    Projects.getProjects()
        .then((projects) => {
            res.status(200).json(projects);
        }).catch(next);
})

router.post("/", async (req, res, next) => {
    try {
        const project = await Projects.insert(req.body);
        res.status(201).json(project);
    } catch (error) {
        next(error);
    }
})

module.exports = router;