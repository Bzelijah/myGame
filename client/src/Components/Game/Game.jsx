import { useSelector } from 'react-redux';
import './Game.css';
import Question from '../Question/Question';
import Theme from '../Theme/Theme';
import { useState } from 'react';
import AskedQuestion from '../AskedQuestion/AskedQuestion'
const Game = () => {
  const themes = useSelector(state => state.game);
  const [show, setShow] = useState(false);
  const [questionId, setQuestionId] = useState(null);
  
  const handlerClick = (e) => {
    console.log(e.target.id);
    setShow(prev => !prev);
    setQuestionId(e.target.id);
  }

  return (
    show ?
      <div>
        <AskedQuestion questionId={questionId}/>
      </div >
      :
      <div className="container w-100">
        {themes.map(el =>
          <Theme key={el.id} theme={el} handlerClick={handlerClick} />
        )}
      </div>
  );
}

export default Game;
