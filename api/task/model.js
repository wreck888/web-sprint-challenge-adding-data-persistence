// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTasks() {
    const results = await db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .select("t.*", "p.project_name", "p.project_description")
    results.forEach(res => {
        res.task_completed = Boolean(res.task_completed)
    })
    return results;
}

async function insert(task){
    const result = await db('tasks').insert(task)
        .then(([task_id]) => {
    return db('tasks')
        .where('task_id', task_id)
        .first();
    });
    result.task_completed = Boolean(result.task_completed);
        return result;
}

module.exports = {
    getTasks,
    insert
}