import Theme from '../Theme/Theme';
import { useSelector } from 'react-redux';
const Game = () => {
  const themes = useSelector(state => state.game);

  const handlerClick = (e)=>{
    console.log(e.target.id);
  }

  return (
    <div className="container w-100">
      {themes.map(el => {
        return (
          <div key={el.id} className="row ">
            <div className="col-sm-3 theme__title">
              {el.theme}
            </div>
            {el.questions.map(question => {
              return (
                <div key={question.id} id={question.id} className="col-sm theme__question" onClick={handlerClick}>
                  {question.points}
                </div>
              )
            })}
          </div>
        )
      })
      }
    </div>
  );
}

export default Game;
