import { EMAIL_VALIDATE_PATTERN } from 'constants/index';

const validationEmail = (value) => EMAIL_VALIDATE_PATTERN.test(value);

export default validationEmail;
