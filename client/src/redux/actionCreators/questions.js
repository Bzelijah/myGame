import * as TYPES from '../types/types';

export function showQuestions() {
  return {
    type: TYPES.SHOW_QUESTIONS,
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
