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

async function insert(projects){
    const result = await db('projects')
        .insert(projects)
        .then(([project_id]) => {
    return db('projects')
        .where('project_id', project_id)
        .first();
    });
    result.project_completed = Boolean(result.project_completed);
        return result;
}

module.exports = {
    getProjects,
    insert
}
