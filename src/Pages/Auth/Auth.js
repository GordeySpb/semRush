import React, { useCallback } from 'react';

import { statuses } from '../../statuses';
import { auth } from '../../API/API';
import { Button } from '../../components/Button/Button';

import styles from './auth.module.css';

/**Auth Page component
 *
 * @param {Object} param.history
 */

export const Auth = ({ history }) => {
  const handleClick = useCallback(async () => {
    try {
      const status = await auth();
      if (status === statuses.connecnted) {
        history.push('/user');
      }
    } catch (error) {
      throw new Error(error);
    }
  });

  return (
    <div className={styles.auth}>
      <Button onClick={handleClick}>Login</Button>
    </div>
  );
};
