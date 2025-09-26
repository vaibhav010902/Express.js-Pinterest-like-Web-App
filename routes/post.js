const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

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
    },
    link: {
        type: String
    },
    description: {
        type: String
    },
    taggedtopic: {
        type: Array,
        default: []
    },
    allowPeopleToComment: {
        type: Boolean,
        default: true
    },
    showSimilarProducts: {
        type: Boolean,
        default: true
    },
    altText: {
        type: String
    }
})

module.exports = mongoose.model('Post', postSchema);