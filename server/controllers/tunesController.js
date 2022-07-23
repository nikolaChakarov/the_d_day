const axios = require("axios");
const createError = require("../utils/createError");
const { generateUrl } = require("../utils/generateUrl");

exports.getTunes = async (req, res, next) => {
    const APPLE_URL = generateUrl(req.query);

    try {
        const dbRes = await axios.get(APPLE_URL);

        res.status(200).json({ success: true, list: dbRes.data.results });
    } catch (err) {
        next(createError(err));
    }
};
