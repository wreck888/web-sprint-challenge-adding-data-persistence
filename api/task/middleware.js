
exports.checkTaskPayload = (req, res, next) => {
    const { task_description } = req.body
    const errorMessage = {status: 400}
    if (task_description === '' || task_description === undefined || task_description === null) {
        res.status(400).json({
            message: "Task description is required"
        })
    } else if (errorMessage.message) {
        next(errorMessage);
    } else {
        next();
    }
}

