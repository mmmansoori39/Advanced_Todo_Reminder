const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken';

const generateToken = (User_id)=>{
    return jwt.sign( {User_id},process.env.JWT_TOKEN,{
        expiresIn: "30d"
    } );
};

export default generateToken;