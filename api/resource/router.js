// build your `/api/resources` router here
const express = require('express')
const Resources = require('./model');
const router = express.Router();

router.get('/', (req, res, next) => {
  Resources.getResources()
    .then(resources => {
      res.json(resources)
    })
    .catch(next)
});

router.post('/', (req, res, next) => {
  const resources = req.body;

  Resources.insert(resources)
    .then(resources => {
      res.status(201).json(resources);
    })
    .catch(next)
});

module.exports = router;