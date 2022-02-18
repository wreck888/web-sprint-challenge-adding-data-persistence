// build your `Resource` model here
const db = require('../../data/dbConfig')

function getResources() {
    return db('resources')
}

function insert(resource) {
    return db('resources')
      .insert(resource)
      .then(() => {
        return(resource)
      });
  }
  
  module.exports = {
    getResources, 
    insert
  } 