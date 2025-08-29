const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @route POST localhost:8000/api/register
// @desc route register
// @access Public

exports.createRegister = async(req,res) =>{
    const { name,password} = req.body;
    try{
        //Check user
        let user = await User.findOne({ name });
        if(user){
            return res.status(400).json({errors:[{msg:'user already exists'}]});
        }
        user = new User({
            name,
            password
        });

        // Encrypt Password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt);
        await user.save();


        //payload  return jsonwebtoken
        const payload = {
            user:{
                id: user.name,
                role: user.role
            }
        }
        jwt.sign(payload, 'jwtSecret',{expiresIn: 3600} ,(err,token)=>{
            if (err) throw err;
            res.json({ token });
        });

        // res.send('User Register Complete');

    }catch (err) {
        // check error
        console.log(err.message);
        res.status(500).send('server Error');
    }
    // res.send('Create Register')
}

exports.login = async(req,res) => {
    res.send('Hello Login')
}