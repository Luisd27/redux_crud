import './App.css';
import { 
  BrowserRouter as Router, 
  Link, 
  Switch, 
  Route,
  NavLink
} from 'react-router-dom';
import GamesPage from './components/GamesPage';
import GamesForm from './components/GamesForm';

function App() {
  return (
    <div className="ui container">
      <Router>
        <div className="ui three item menu">
          <NavLink className="item" activeClassName={"active"}  to="/home">Home</NavLink>
          <NavLink className="item" activeClassName={"active"}  to="/games">Games</NavLink>
          <NavLink className="item" activeClassName={"active"}  to="/games/new">Add Game</NavLink>
        </div>
          <Switch>
            <Route exact path="/games">
              <GamesPage/>
            </Route>
            <Route path="/games/new">
              <GamesForm/>
            </Route>
            <Route path="/game/:_id" component={GamesForm}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
