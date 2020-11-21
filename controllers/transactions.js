const Transaction = require('../models/Transaction')

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find()

        return res.status(200).json({
            data: transactions
        })
    } catch (error) {
        return res.status(500).json({
            error: 'Server Error'
        })
    }
}

// @desc    Add a transaction
// @route   POST /api/v1/transactions
// @access  Public
exports.addTransaction = async (req, res, next) => {
    try { 
        const { text, amount } = req.body;
    
        const transaction = await Transaction.create(req.body)
    
        return res.status(201).json({
            data: transaction
        })
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message)

            return res.status(400).json({
                error: messages
            })
        } else {
            error: 'Server Error'
        }
    }

}

// @desc    Delete transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteTransaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id)

        if(!transaction) {
            return res.status(404).json({
                error: 'No transaction found'
            })
        }

        await transaction.remove()

        return res.status(200).json({
            data: {}
        })

    } catch (error) {
        return res.status(500).json({
            error: 'Server Error'
        })
    }
}