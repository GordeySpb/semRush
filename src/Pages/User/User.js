import React, { useState, useCallback } from 'react';

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
    // filtered,
    // friends,
    // user,
    // isFetching,
    // setFriends,
    // count,
    setFriends,
    state,
  } = useFetchUserData();

  console.log(state);

  const handleChange = useCallback(
    ({ target: { value } }) => {
      setSearchTerm(value);
    },
    [setSearchTerm]
  );

  const handleClick = useCallback(() => {
    const results = state.filtered.filter(({ first_name }) =>
      first_name.toLowerCase().includes(searchTerm)
    );
    setFriends(results);
  }, [state.filtered, searchTerm, setFriends]);

  const handleLogout = useCallback(async () => {
    const status = await logout();
    if (status === statuses.unknown) {
      history.push('/');
    }
  }, [history]);

  return (
    <div className={styles.container}>
      {!state.isFetching && (
        <div>
          <Profile
            img={state.user.photo_200}
            name={state.user.first_name}
            lastName={state.user.last_name}
            count={state.count}
          />

          <Search
            onChange={handleChange}
            onClick={handleClick}
            value={searchTerm}
          />

          <div className={styles.listWrapper}>
            <ul className={styles.list}>
              {!!state.friends.length &&
                state.friends.map(friend => {
                  return (
                    <Friend
                      key={state.friend.id}
                      id={state.friend.id}
                      avatar={state.friend.photo_100}
                      name={state.friend.first_name}
                      lastName={state.friend.last_name}
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
