const initState = {
  game: [{
    id:1,
    theme: 'Спорт',
    questions: [
      {
        id:11,
        points: 200,
        question: 'Что такое спорт?',
        answer: 'Это жизнь',
        status: false,
      },
      {
        id:12,

        points: 400,
        questions: 'Когда придумали футбол?',
        asnwer: 'В 19 веке',
        status: false,
      },
    ],
  }],
  users: [{
    id: 1,
    login: 'Igor',
    password: 'tapac',
    points: 0,
  }]
}


export default initState;
