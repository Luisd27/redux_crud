import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router, 
  Link, 
  Switch, 
  Route
} from 'react-router-dom';
import GamesPage from './components/GamesPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Router>
          <Link to="/games">Games</Link>
        
          <Switch>
            <Route path="/games">
              <GamesPage/>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
