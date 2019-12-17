import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/header/header';
import Home from './pages/home/home';
import './index.css';

const App = () => {
    
    return (
      <div className="App">
          <Header/>
        <Router>
            
          <div>
      
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/search" component={Search} />
        <Route path="/profile" component={Profile} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/signup" component={Signup} /> */}

        </div>
        </Router>

      </div>
    );
  
}

ReactDOM.render(<App />, document.getElementById('root'));


