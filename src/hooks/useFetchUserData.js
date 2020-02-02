import { useEffect, useState, useReducer } from 'react';

import { callAPI } from '../API/API';

const SET_USER = 'SET_USER';
const SET_FRIENDS = 'SET_FRIENDS';
const SET_FILTERED = 'SET_FILTERED';
const SET_FETCHING = 'SET_FETCHING';
const SET_COUNT = 'SET_COUNT';

function reducer(state, { type, payload }) {
  switch (type) {
    case SET_USER: {
      return { ...state, user: payload.user };
    }

    case SET_FRIENDS: {
      return { ...state, friends: payload.friends };
    }

    case SET_FILTERED: {
      return { ...state, filtered: payload.filtered };
    }

    case SET_FETCHING: {
      return { ...state, isFetching: payload.isFetching };
    }

    case SET_COUNT: {
      return { ...state, count: payload.count };
    }
  }
}

export const useUser = () => {
  const initialState = {
    user: {},
    friends: [],
    filtered: [],
    isFetching: false,
    count: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setUser = user => dispatch({ type: SET_USER, payload: { user } });

  const setFriends = friends =>
    dispatch({ type: SET_FRIENDS, payload: { friends } });

  const setFiltered = filtered =>
    dispatch({ type: SET_FILTERED, payload: { filtered } });

  const setFetching = isFetching =>
    dispatch({ type: SET_FRIENDS, payload: { isFetching } });

  const setCount = count => dispatch({ type: SET_FRIENDS, payload: { count } });

  return {
    state,
    setUser,
    setFriends,
    setFiltered,
    setFetching,
    setCount,
  };
};

export const useFetchUserData = () => {
  // const [user, setUser] = useState({});
  // const [friends, setFriends] = useState([]);
  // const [filtered, setFiltered] = useState([]);
  // const [isFetching, setFetching] = useState(false);
  // const [count, setCount] = useState(null);
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
    // user,
    // friends,
    // filtered,
    // isFetching,
    // setFriends,
    // count,
  };
};
