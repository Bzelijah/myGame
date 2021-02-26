const initState = {
  game: [{
    theme: 'Спорт',
    questions: [
      {
        points: 200,
        question: 'Что такое спорт?',
        answer: 'Это жизнь',
        status: false,
      },
      {
        points: 400,
        questions: 'Когда придумали футбол?',
        asnwer: 'В 19 веке',
        status: false,
      },
    ],
  },
  {
    theme: 'Загадки',
    questions: [
      {
        points: 200,
        question: 'Какой рукой лучше размешивать чай?',
        answer: 'Чай лучше размешивать ложкой',
        status: false,
      },
      {
        points: 400,
        question: 'Что может быть больше слона и одновременно невесомым?',
        answer: 'Тень слона',
        status: false,
      },
    ],
  },
  {
    theme: 'Разминка',
    questions: [
      {
        points: 200,
        question: 'Что такое свиная отбивная?',
        answer: 'Картошка, отбитая у свиньи',
        status: false,
      },
      {
        points: 400,
        question: 'Кто впеpвые стал пpиглашать учёных на "Огонек"?',
        answer: 'Инквизиторы...',
        status: false,
      },
    ],
  },
  ],
  users: [{
    login: 'Igor',
    password: 'tapac',
    points: 0,
  }],
};


export default initState;
