import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { statuses } from '../../statuses';
import { logout } from '../../API/API';
import { Profile } from '../../components/Profile/Profile';
import { Friend } from '../../components/Friend/Friend';
import { Search } from '../../components/Search/Search';
import { Button } from '../../components/Button/Button';
import { useFetchUserData } from '../../hooks/useFetchUserData';

import styles from './user.module.css';

/**User Page component
 *
 * @param {Object} param.history
 */

export const User = ({ history }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const {
    setFriends,
    state: { filtered, user, count, isFetching, friends },
  } = useFetchUserData();

  const handleChange = useCallback(
    ({ target: { value } }) => {
      setSearchTerm(value);
    },
    [setSearchTerm]
  );

  const handleClick = useCallback(() => {
    const results = filtered.filter(({ first_name }) =>
      first_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFriends(results);
  }, [filtered, searchTerm, setFriends]);

  const handleLogout = useCallback(async () => {
    const status = await logout();
    if (status === statuses.unknown) {
      history.push('/');
    }
  }, [history]);

  return (
    <div className={styles.container}>
      {!isFetching && (
        <div>
          <Profile
            img={user.photo_200}
            name={user.first_name}
            lastName={user.last_name}
            count={count}
          />

          <Search
            onChange={handleChange}
            onClick={handleClick}
            value={searchTerm}
          />

          <div className={styles.listWrapper}>
            <ul className={styles.list}>
              {!!friends.length &&
                friends.map(friend => {
                  return (
                    <Friend
                      key={friend.id}
                      id={friend.id}
                      avatar={friend.photo_100}
                      name={friend.first_name}
                      lastName={friend.last_name}
                    />
                  );
                })}
            </ul>
          </div>
          <div className={styles.logoutWrapper}>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        </div>
      )}
    </div>
  );
};

User.propTypes = {
  history: PropTypes.object.isRequired,
};
