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
  }],
  users: {
    login: 'Igor',
    password: 'tapac',
    points: 0,
  }
}


export default initState;
