import * as TYPES from '../types/types';

function userReducer(users = [], action) {
  switch (action.type) {
    case TYPES.ADD_POINTS:
      return [...users,];
    default:
      return users;
  }
}

export default userReducer;
