import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    'firstName': {
        type: String,
        required: true
    },
    'lastName': {
        type: String,
        required: true,
    },
    'email': {
        type: String,
        required: true,
    },
    'number': {
        type: Number,
        required: true,
    },
    'website': {
        type: String,
        required: false,
    },
    'github': {
        type: String,
        required: false,
    },
    'linkedin': {
        type: String,
        required: false,
    }
})

export const User = mongoose.model('User', userSchema);