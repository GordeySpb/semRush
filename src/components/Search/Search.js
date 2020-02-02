import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button/Button';

import styles from './search.module.css';

/** Search component
 *
 * @param {String} param.value input value
 * @param {Function} param.onClick function
 * @param {Function} param.onChange function
 */

export const Search = ({ onChange, onClick, value }) => (
  <div className={styles.wrapper}>
    <input
      className={styles.input}
      placeholder="Type name..."
      type="text"
      onChange={onChange}
      value={value}
    />
    <Button onClick={onClick}>Search</Button>
  </div>
);

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
