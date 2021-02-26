import { useSelector, useDispatch } from 'react-redux';

const Theme = () => {
  const themes = useSelector(state => state.game);
  console.log(themes)
  return (
    <div>
      <ul>
        {
          themes.map(el =>
            <li>
              <h5>{el.theme}</h5>
              <p>{el.question}</p>
            </li>
          )}
      </ul>
    </div>
  );
}

export default Theme;
