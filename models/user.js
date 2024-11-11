const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    photo: {
        type: String,
    },
    userType: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'UserType'
    },
    public: {
        type: Boolean,
        require: true,
        default: false,
    }
})

module.exports = mongoose.model('User', userSchema);