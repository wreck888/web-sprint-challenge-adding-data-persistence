
exports.checkProjectPayload = (req, res, next) => {
    const { project_name } = req.body
    const errorMessage = {status: 400}
    if (project_name === '' || project_name === undefined || project_name === null) {
        res.status(400).json({
            message: "Project Name is required"
        })
    } else if (errorMessage.message) {
        next(errorMessage);
    } else {
        next();
    }

}