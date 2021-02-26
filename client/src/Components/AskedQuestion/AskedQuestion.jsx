import { useSelector, useDispatch } from 'react-redux'
import { addPoints, changeStatus } from '../../redux/actionCreators/questions'
import { useEffect, useState } from 'react'
const AskedQuestion = ({ questionId, setShow }) => {
  const [value, setValue] = useState();
  const [question, setQuestion] = useState();
  const [theme, setTheme] = useState({});
  const game = useSelector(state => state.game);
  const user = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('game ==>', game);
    const theme1 = game.find(theme => String(theme.id) === String(questionId).split('')[0])
    console.log('theme1 ===>', theme1);
    setTheme(theme1)
    console.log('set theme ==>', theme);
    setQuestion(theme1.questions.find(question => String(question.id) === String(questionId)))
    // setQuestion()

  }, [])



  const handlerAnswer = () => {
    console.log('ANSWER!!!!!!====>>>>sss');
    console.log(question.answer.toLowerCase() === value.toLowerCase());
    if (question.answer.toLowerCase() === value.toLowerCase()) {
      dispatch(addPoints(1, question.points));
    }
    else {
      dispatch(addPoints(1, -question.points));
    }
    dispatch(changeStatus(theme.id, question.id));
    setShow(prev => !prev);
  }

  return (
    <div>
      <div className="mb-3">
        <label className="form-label">{question && question.question}</label>
        <input type="text" className="form-control" onChange={(e) => setValue(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handlerAnswer}>Ответить</button>
    </div>
  );
}

export default AskedQuestion;
