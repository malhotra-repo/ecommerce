import { body, validationResult } from "express-validator"

function validateRequest(req, res, next) {
 const errors = validationResult(req);
 if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() })
 }
 next();
}

export const validateRegisterUser = [
 body("email").isEmail().withMessage("invalid email"),

 body("contact").notEmpty().withMessage("contact no is required")
  .matches(/^[0-9]+$/).withMessage("contact no should contain 10 digit numbers"),

 body("password").isLength({ min: 6 }).withMessage
  ("password should be at least 6 characters long"),

 body("fullname").notEmpty().withMessage("fullname is required").isLength({ min: 3 }).withMessage("fullname should be at least 3 characters long"),

 body("isSeller").toBoolean().isBoolean().withMessage("isSeller should be a boolean value"),


 validateRequest
]

export const validateLoginUser = [
 body("email").isEmail().withMessage("invalid email"),
 body("password").notEmpty().withMessage("password is required"),
 validateRequest
]
