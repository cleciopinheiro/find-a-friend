import ValidateEmail from "./validateEmail";
import ValidateName from "./validateName";
import ValidatePassword from "./validatePassword";
import ValidateGoogleLogin from "./validateGoogleLogin";
import ValidateDirector from "./validateDirector";
import { CEPValidator } from "./validateCEP";

const validateEmail = new ValidateEmail().validate;
const validateName = new ValidateName().validate;
const validatePassword = new ValidatePassword().validate;
const validateGoogleLogin = new ValidateGoogleLogin().validate;
const validateCEP = new CEPValidator().validate;
const validateDirector = new ValidateDirector().validate;


export default {
    validateEmail,
    validateName,
    validatePassword,
    validateGoogleLogin,
    validateCEP,
    validateDirector
}