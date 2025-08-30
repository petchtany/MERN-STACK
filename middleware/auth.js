const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) =>{
    const token = req.headers['auth-token'];

    if(!token){
        return res.status(401).json({msg:'No Token, Authorization denied'});
    }
    try{
        const decoded = jwt.verify(token,'jwtSecret');
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(300).json({msg:'Token is not valid'});
    }
}