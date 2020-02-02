import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.css';

/** Button component
 *
 * @param {String} param.children button name
 * @param {Function} param.onClick function
 */

export const Button = ({ children, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
