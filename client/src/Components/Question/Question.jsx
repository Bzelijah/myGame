const Question = (props) => {
  const {question,handlerClick }=props
  return (
    <div key={question.id} id={question.id} className="col-sm theme__question" onClick={handlerClick}>
      {question.points}
    </div>
  );
}

export default Question;
