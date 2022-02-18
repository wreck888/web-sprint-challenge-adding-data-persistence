const db = require("../../data/dbConfig")

exports.checkResourcePayload = (req, res, next) => {
    const { resource_name } = req.body
    const errorMessage = {status: 400}
    if (resource_name === '' || resource_name === undefined || resource_name === null) {
        res.status(400).json({
            message: "Resource Name is required"
        })
    } else if (errorMessage.message) {
        next(errorMessage);
    } else {
        next();
    }
}

exports.checkResourceNameUnique = async (req, res, next) => {
    try {
      const resources = await db('resources')
        .where("resource_name", req.body.resource_name
        .trim())
        .first()
      if (resources) {
        next({ 
            status: 400, message: "That resource name is taken"
        })
      } else {
        next();
      }
    } catch (error) {
      next(error);
    }
  }