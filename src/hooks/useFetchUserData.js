import { useEffect, useState } from 'react';

import { callAPI } from '../API/API';

export const useFetchUserData = () => {
  const [user, setUser] = useState({});
  const [friends, setFriends] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [isFetching, setFetching] = useState(false);
  const [count, setCount] = useState(null);

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
    user,
    friends,
    filtered,
    isFetching,
    setFriends,
    count,
  };
};
