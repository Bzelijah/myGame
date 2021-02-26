import Question from '../Question/Question'

const Theme = (props) => {
  const { theme, handlerClick } = props
  console.log(' themethemethemetheme ==>', theme);
  return (
    <div key={theme.id} className="row ">
      {/* {JSON.stringify(theme)} */}
      <div className="col-sm-3 theme__title">
        {theme.theme}
      </div>
      {theme && theme.questions.map(question =>
        <Question
          key={question.id} question={question} handlerClick={handlerClick} />
      )}
    </div>
  );
}

export default Theme;
