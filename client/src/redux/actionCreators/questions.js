import * as TYPES from '../types/types';

export function showQuestions(id) {
  return {
    type: TYPES.CHANGE_STATUS,
    data: String(id)
  }
};

export function addPoints(id, points) {
  return {
    type: TYPES.ADD_POINTS,
    data: {
      id, points
    },
  }
};
