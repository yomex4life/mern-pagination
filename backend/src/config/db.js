const mongoose = require('mongoose')

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('Connected to database')
    } catch (error) {
        console.log('Connection to DB faile', error)
        process.exit(1)
    }
}

module.exports = connectDB;