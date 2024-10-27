const mongoose = require('mongoose')

const mongoDB = async ()=>{
    await mongoose.connect('mongodb://localhost:27017/CultureLinkr')
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB', err)
    })
} 

module.exports = mongoDB