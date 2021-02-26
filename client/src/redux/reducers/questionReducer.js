import * as TYPES from '../types/types';

function questionReducer(questions = [], action) {
  switch (action.type) {
    case TYPES.CHANGE_STATUS:
      return questions.map(el => String(el.id) === action.data ? { status: !el.status } : el);
    default:
      return questions;
  }
}

export default questionReducer;
