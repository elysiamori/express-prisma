const responses = {
    response : (statusCode, data, message, res) => {
        res.status(statusCode).json({
            status_code: statusCode,
            data: data,
            message: message
        })
    },

    errResponse: (statusCode, error, message, res) => {
        res.status(statusCode).json({
            status_code: statusCode,
            error: error,
            message: message
        })
    }
}

export default responses
 