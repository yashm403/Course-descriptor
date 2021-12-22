const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        trim: true,
    },
    Email:{
        type:String,
        unique: true,
        required:true,
    },
    Password:{
        type:String,
        required:true
    },
    Bio:{
        type:String,
        required:true
    },
    init_token:{
        type: String,
    },
    tokens:[{
        token:{
            type: String,
            required: true
        }
    }],
},{
    timestamps:true, 
})


userSchema.statics.findByCredentials = async (email,password)=>{
    const user  = await User.findOne({Email: email})
    if(!user){
        throw new Error('Unable to login /No User')
    }
    
    return user
}




const User = mongoose.model('User',userSchema)

module.exports = User;

