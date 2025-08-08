const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/fifthExpressApp');

const postSchema = mongoose.Schema({
    imageTitle: {
        type: String,
        required: true
    },
    imageCaption: {
        type: String,
    },
    image: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Array,
        default: []
    }
})

module.exports = mongoose.model('Post', postSchema);