const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema


const Course = new Schema({    
    name: { type: String, maxLength: 255, required: true },
    description: { type: String, maxLength: 600 },    
    image: { type: String, maxLength: 255 },
    videoId: { type: String, required: true, maxLength: 600 },
    level: { type: String, maxLength: 600 },
    slug: { type: String, slug: 'name'},
    // slug: {type: String, default: '???', maxlength: -1},   
},{
    timestamps: true,
})

module.exports = mongoose.model('Course', Course)