const jwt = require("jsonwebtoken");

exports.authMiddleware = async (req, res, next) => {

    const token = req.cookies;
    console.log(req.cookies);


    if (!token || token == undefined) {
        res.status(401)
        throw new Error('Not authorized')
    }

    try {

        const decodedData = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decodedData.id);
        next();
    } catch (error) {
        console.error(error)
        res.status(401)
        throw new Error('Not authorized,token')
    }


};