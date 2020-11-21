const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please fill up transaction field']
    },
    amount: {
        type: Number,
        required: [true, 'Please add + or - number']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Transaction', TransactionSchema)