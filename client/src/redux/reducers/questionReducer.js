import * as TYPES from '../types/types';

function questionReducer(game = [], action) {
  switch (action.type) {
    case TYPES.CHANGE_STATUS:
      console.log('REDUCER  game ==>', game);
      const theme = game.find(el => String(el.id) === action.data.themeId);
      console.log('RED theme=>', theme);
      const questionTarget = theme.questions.find(question => String(question.id) === action.data.questionId);
      console.log('question theme=>', questionTarget);
      questionTarget.status = !questionTarget.status;
      const newTheme = { ...theme, questions: theme.questions.map(q => q.id === questionTarget.id ? questionTarget : q) }
      return game.map(themeEl => themeEl.id === theme.id ? newTheme : themeEl)

    default:
      return game;
  }
}

export default questionReducer;
