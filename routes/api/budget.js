const express = require("express");
const router = express.Router();
const passport = require("passport");

// bringing in Budget model
const Budget = require("../../models/Budget");

// @desc get all transactions
// @route Get /api/vs/transactions
// @access Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Budget.find({})
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  }
);

// @desc Add transactions
// @route Post /api/vs/transactions
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  ({ body }, res) => {
    Budget.create(body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        if (error.name === "ValidationError") {
          const messages = Object.values(error.errors).map(
            (val) => val.message
          );
          return res.status(400).json({
            success: false,
            error: messages,
          });
        } else {
          return res.status(500).json({
            success: false,
            error: "Server Error",
          });
        }
      });
  }
);

// @desc Delete transactions
// @route /api/vs/transactions/:id
// @access Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Budget.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  }
);

module.exports = router;
