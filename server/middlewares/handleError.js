const handleError = (err, req, res, next) => {
    const errStatus = err.status || 500;
    const errMessage = err.message || "Server Error";

    res.status(errStatus).json({
        success: false,
        message: errMessage,
        stack: err.stack,
    });
};

module.exports = handleError;
