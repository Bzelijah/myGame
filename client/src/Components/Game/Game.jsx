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

  const handlerClick = (id) => {
    console.log('handlerClick====>', id);
    setShow(prev => !prev);
    setQuestionId(id);
  }

  return (
    show ?
      <div>
        show ={show ? 'TRUE' : 'FALSE'}
        questionId ={questionId}


        <AskedQuestion questionId={questionId} setShow={setShow} />
      </div >
      :
      <div className="container w-100">
        {themes.map(el =>
          <Theme key={el.id} theme={el} handlerClick={(e) => handlerClick(e.target.id)} />
        )}
      </div>
  );
}

export default Game;
