const logger = require("./loggerConf")

const handleError = async (err, req, res, next) => {
    try {
        logger.error(err);
        return res.status(400).json("Please retry again. If the problem persists, please contact the administrator.")
    } catch (err) {
        return res.status(400).json("Please retry again. If the problem persists, please contact the administrator.")
    }
}

module.exports = {
    handleError
}