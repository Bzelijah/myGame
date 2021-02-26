import * as TYPES from '../types/types';

function userReducer(users = [], action) {
  switch (action.type) {
    case TYPES.ADD_POINTS:
      return users.map(el => el.id === action.data.id ?
        el.points += action.data.points :
        el)

    default:
      return users;
  }
}

export default userReducer;
