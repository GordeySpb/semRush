import { useEffect } from 'react';

import { useUser } from './useUser';
import { callAPI } from '../API/API';

export const useFetchUserData = () => {
  const {
    state,
    setUser,
    setFriends,
    setFiltered,
    setFetching,
    setCount,
  } = useUser();

  const fetchData = async () => {
    try {
      setFetching(true);

      const userData = await callAPI('users.get', {
        fields: 'photo_200',
      });

      const { items, count } = await callAPI('friends.get', {
        fields: 'first_name, last_name, photo_100',
      });

      setUser(userData[0]);
      setFriends(items);
      setFiltered(items);
      setCount(count);
      setFetching(false);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    state,
    setFriends,
  };
};
