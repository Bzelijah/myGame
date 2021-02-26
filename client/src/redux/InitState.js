const initState = {
  game: [{
    id: 1,
    theme: 'Спорт',
    questions: [
      {
        id: 11,
        points: 200,
        question: 'Что такое спорт?',
        answer: 'Это жизнь',
        status: false,
      },
      {
        id: 12,
        points: 400,
        questions: 'Когда придумали футбол?',
        asnwer: 'В 19 веке',
        status: false,
      },
    ],
  },
  {
    id: 2,
    theme: 'Загадки',
    questions: [
      {
        id: 21,
        points: 200,
        question: 'Какой рукой лучше размешивать чай?',
        answer: 'Чай лучше размешивать ложкой',
        status: false,
      },
      {
        id: 22,
        points: 400,
        question: 'Что может быть больше слона и одновременно невесомым?',
        answer: 'Тень слона',
        status: false,
      },
    ],
  },
  {
    id: 3,
    theme: 'Разминка',
    questions: [
      {
        id: 31,
        points: 200,
        question: 'Что такое свиная отбивная?',
        answer: 'Картошка, отбитая у свиньи',
        status: false,
      },
      {
        id: 32,
        points: 400,
        question: 'Кто впеpвые стал пpиглашать учёных на "Огонек"?',
        answer: 'Инквизиторы...',
        status: false,
      },
    ],
  },
  ],
  users: [{
    id: 1,
    login: 'Igor',
    password: 'tapac',
    points: 0,
  }],
};


export default initState;
