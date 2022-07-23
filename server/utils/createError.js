const createError = (status, message) => {
    const customError = new Error();

    customError.status = status;
    customError.message = message;

    return customError;
};

module.exports = createError;
