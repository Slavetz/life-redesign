import { FILE_MIME_TYPES } from 'constants/main';

const validationFileType = (value) => FILE_MIME_TYPES.match(value);

export default validationFileType;
