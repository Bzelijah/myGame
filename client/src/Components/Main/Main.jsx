import './style.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Main = () => {
  const user = useSelector(state => state.users);
  return (
    <div className='profile'>
      <div className="card">
        <img src={`https://sun9-46.userapi.com/impg/c857520/v857520677/180084/2XLbvmId6L4.jpg?size=810x1080&quality=96&sign=bf612eb5d328a9991ee148d2ca415461&type=album`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{user[0].login}</h5>
          <p className="card-text">Points: {user[0].points}</p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
      <Link to="/game">
        <button type="button" class="btn btn-danger game">Начать игру!</button>
      </Link>
    </div>
  );
}

export default Main;
