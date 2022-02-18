// build your `Project` model here
const db = require('../../data/dbConfig');

async function getProjects() {
    const projects = await db("projects")
    return projects.map((project) => {
        return {
            ...project,
            project_completed: project.project_completed === 1,
        }
    })
}

function insert(project) {
    return db('projects')
      .insert(project)
      .then(() => {
        return(project)
      });
  }

module.exports = {
    getProjects,
    insert
}
