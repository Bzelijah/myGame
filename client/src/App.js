import './App.css';
import Theme from './Components/Theme/Theme';
import Main from './Components/Main/Main.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
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
