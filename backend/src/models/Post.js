const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Please provide a title']
    },
    body:{
        type: String,
        required: [true, 'Please provide a body']
    },    
    author:{
        type: String,
        required: [true, 'Please provide an author']
    },

},
{
    timestamps:true
}
);


module.exports = mongoose.model('Post', postSchema);