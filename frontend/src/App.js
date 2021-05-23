import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';


function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/page/:pageNumber" component={Home} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
