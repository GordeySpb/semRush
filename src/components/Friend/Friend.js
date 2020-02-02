import React from 'react';
import PropTypes from 'prop-types';

import styles from './friend.module.css';

/** Friend component
 *
 * @param {String} param.id friend id
 * @param {String} param.avatar friend url for photo
 * @param {String} param.name friend name
 * @param {String} param.lastName friend last name
 */

export const Friend = ({ id, avatar, name, lastName }) => (
  <li className={styles.item} key={id} id={id}>
    <div className={styles.imgWrapper}>
      <img className={styles.img} src={avatar} />
    </div>
    <div>{`${name} ${lastName}`}</div>
  </li>
);

Friend.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};
