import { FILE_MIME_TYPES } from 'constants/index';

const validationFileType = (value) => FILE_MIME_TYPES.match(value);

export default validationFileType;
