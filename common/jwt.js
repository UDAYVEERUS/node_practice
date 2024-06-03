const jwt = require('jsonwebtoken');
const JWT_SECRET = "itsasecret2341";

const VerifyJwt = async (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(402).json({
            message: "No JWT Token Provided",
            status: 402
        });
    }

    const token = authHeader.replace('Bearer ', ''); // Extract the token by removing the 'Bearer ' prefix

    try {
        const validate = await jwt.verify(token, JWT_SECRET);
        if (validate) {
            req.Jwt_data = validate;
            return next();
        }
        return res.status(402).json({
            message: "Invalid JWT Token",
            status: 402,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "something went wrong",
            data: err,
            status: 500
        });
    }
}
module.exports = VerifyJwt;
