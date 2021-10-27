/**
 *
 * @param reason
 * @param errorMap
 * @param defaultMessage
 * @returns {string}
 */
export const getErrorMessage = (reason = '', errorMap = {}, defaultMessage = 'Произошла неизвестная ошибка') =>
  errorMap?.[reason?.error?.message] || defaultMessage;
