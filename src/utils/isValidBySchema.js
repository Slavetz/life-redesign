import logger from 'utils/logger';

export const isValidBySchema = (schema) => (object) => {
  try {
    return schema.validateSync(object, {
      strict: false,
      abortEarly: false,
      context: object,
    });
  } catch (validationError) {
    const { errors = [], value = {} } = validationError;
    logger.error({ type: 'ValidationError', value, errors });
    return false;
  }
};
