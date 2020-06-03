const express = require("express");
const router = express.Router();

// Load Transaction model
const Transaction = require("../models/transaction.js");


// @route Post api/transaction/
// @desc Add a transction to the tracker
// @access Private
router.post("/transaction", ({body}, res) => {
    Transaction.create(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });
  
  // @route Post api/transaction/bulk
// @desc Add the transctions that were saved from the index.db, when app was offline 
// @access Private
  router.post("/transaction/bulk", ({body}, res) => {
    Transaction.insertMany(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });
  
  // @route GET api/plaid/accounts
// @desc Get all transaction the user has inputed and saved
// @access Private
  router.get("/transaction", (req, res) => {
    Transaction.find({}).sort({date: -1})
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });
  
  module.exports = router;