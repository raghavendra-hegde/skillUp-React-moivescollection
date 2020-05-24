import React from 'react';
import './App.css';
import { BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Movie from './Movie';

function App() {
  //  {/* :movieId represents the params value  */}
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route exact path='/movie/:movieId' component={Movie}/>
      </div>
    </Router>
    
  );
}

export default App;
