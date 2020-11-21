const { triggerAsyncId } = require('async_hooks')
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.brightCyan.underline.bold)
    } catch (error) {
        console.log(`ErrorL ${error.message}`.red)
        process.exit(1)
    }
}

module.exports = connectDB