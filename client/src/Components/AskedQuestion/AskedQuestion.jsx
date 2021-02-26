import { useSelector } from 'react-redux'
import { useState } from 'react'
const AskedQuestion = (props) => {
  const [value, setValue] = useState('');
  const game = useSelector(state => state.game);

  const theme = game.find(theme =>
    String(theme.id) === String(props.questionId).split('')[0]
  );

  const question = theme.questions.find(question => {

    if (String(question.id) === String(props.questionId)) return question
  }
  );
  console.log(question);
  const handlerAnswer = () => {
    

  }

  return (
    <div>
      <div className="mb-3">
        <label className="form-label">{question.question}</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setValue(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handlerAnswer}>Ответить</button></div>
  );
}

export default AskedQuestion;
