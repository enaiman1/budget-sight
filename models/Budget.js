const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
 text:{
     type: String,
     trim: true,
     required: [true, "Please add some text"]
 },
 amount:{
     type: Number,
     required:[true, 'Please add a positive or negative number']
 },
 date: {
     type: Date,
     default: Date.now
 }
});

module.exports = mongoose.model('Budget', BudgetSchema)