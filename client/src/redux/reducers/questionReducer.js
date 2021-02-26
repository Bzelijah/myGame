import * as TYPES from '../types/types';

function questionReducer(questions = [], action) {
  switch (action.type) {
    case TYPES.SHOW_QUESTIONS:
      return [...questions];
    default:
      return questions;
  }
}

export default questionReducer;
