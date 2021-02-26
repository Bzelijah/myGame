import './App.css';
import Theme from './Components/Theme/Theme';
import Main from './Components/Main/Main.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/game">
            <Theme />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
