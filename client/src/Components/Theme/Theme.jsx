import { useSelector, useDispatch } from 'react-redux';

const Theme = () => {
  const themes = useSelector(state => state.game);
  console.log(themes)
  return (
    <div>
      <ul>
        <li>
          <p>dsadasd</p>
        </li>
      </ul>
    </div>
  );
}

export default Theme;
