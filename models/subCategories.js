const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
    title: {
        type: String,
        default: 'starr',
        required: [true, 'Please add a title'],
        unique: true,
        maxlength: [40, 'Title cannot be more than 40 characters']
    },
    description: {
        type: String,
        default: 'yes',
        required: true,
        maxlength: [200, 'Description cannot be more than 200 characters']
    },
      
})

module.exports = mongoose.models.subCategories || mongoose.model('subCategories', subCategorySchema);