import { EMAIL_VALIDATE_PATTERN } from 'constants/main';

const validationEmail = (value) => EMAIL_VALIDATE_PATTERN.test(value);

export default validationEmail;
