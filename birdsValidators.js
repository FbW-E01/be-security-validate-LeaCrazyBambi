import { body } from "express-validator";

const birdsValidators = [
  body("species")
    .isLength({ min: 3 })
    .withMessage("Species must be at least 3 characters long"),
  body("species")
    .isLength({ max: 80 })
    .withMessage("You are using too many characters"),
  body("notes")
    .isLength({ max: 140 })
    .withMessage("You are using over 140 characters for the notes"),
  body("estimatedAmount").isNumeric().withMessage("You can only enter numbers"),
];

export default birdsValidators;
