import * as TYPES from '../types/types';

export function changeStatus(themeId, questionId) {
  return {
    type: TYPES.CHANGE_STATUS,
    data: {themeId: String(themeId), questionId: String(questionId) }
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
