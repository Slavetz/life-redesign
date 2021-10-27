import { PASSWORD_VALIDATE_PATTERN } from 'constants/main';

const validationPassword = (value) => PASSWORD_VALIDATE_PATTERN.test(value);

export default validationPassword;
