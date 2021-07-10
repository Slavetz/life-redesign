import PropTypes from 'prop-types';
import { isHidden, hiddenType } from 'constants/hiddenConfig';

const DisablingWrapper = ({ children, placeholder = '', type }) => (isHidden[type] ? placeholder : children);

DisablingWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  type: PropTypes.string,
};

export default DisablingWrapper;
export { hiddenType };
