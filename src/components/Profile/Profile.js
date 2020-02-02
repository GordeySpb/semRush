import React from 'react';
import PropTypes from 'prop-types';

import styles from './profile.module.css';

/** Friend component
 *
 * @param {String} param.img url for avatar
 * @param {String} param.name user name
 * @param {String} param.lastName user lastName
 * @param {Number} param.count friends count
 */

export const Profile = ({ img, name, lastName, count }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={img} alt="Avatar" />
        </div>
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{`${name} ${lastName}`}</p>
        <p>{`Friends count: ${count}`}</p>
      </div>
    </div>
  );
};

Profile.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

Profile.defaultProps = {
  img: '',
  name: '',
  lastName: '',
  count: 0,
};
