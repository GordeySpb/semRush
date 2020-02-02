import { useReducer } from 'react';

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

    default:
      throw new Error();
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
    dispatch({ type: SET_FETCHING, payload: { isFetching } });

  const setCount = count => dispatch({ type: SET_COUNT, payload: { count } });

  return {
    state,
    setUser,
    setFriends,
    setFiltered,
    setFetching,
    setCount,
  };
};
