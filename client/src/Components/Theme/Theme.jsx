import Question from '../Question/Question'

const Theme = (props) => {
  const { theme, handlerClick } = props
  console.log(theme);
  console.log(handlerClick);
  return (
    <div key={theme.id} className="row ">
      <div className="col-sm-3 theme__title">
        {theme.theme}
      </div>
      {theme.questions.map(question =>
        <Question key={question.id} question={question} handlerClick={handlerClick} />
      )}
    </div>
  );
}

export default Theme;
