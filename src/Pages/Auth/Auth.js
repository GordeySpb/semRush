import React from 'react';

import { auth } from '../../API/API';
import { Button } from '../../components/Button/Button';

import styles from './auth.module.css';

/**Auth Page component
 *
 * @param {Object} param.history
 */

export const Auth = ({ history }) => {
  const CONNECTED_STATUS = 'connected';

  const handleClick = async () => {
    try {
      const status = await auth();
      if (status === CONNECTED_STATUS) history.push('/user');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={styles.auth}>
      <Button onClick={handleClick}>Login</Button>
    </div>
  );
};
