import React from 'react';
import {BrowserRouter as Router, Switch,Route,NavLink} from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Post from './pages/Post'
import ErrorBoundary from './components/ErrorBoundary'
function App() {
  return (
    <div className="App">
      <Router>
        <nav>
        <h1>BLOGLOG</h1>

        <NavLink
         to='/' 
         style={{textDecoration:'none',textAlign:'center',marginTop:0}}
         exact
         activeStyle={{color:'yellow'}}
         >
         <span>
           Home
         </span></NavLink>
        </nav>
        <Switch>
          <Route path='/posts/:postId'>
          <ErrorBoundary>
            <Post />
          </ErrorBoundary>
          </Route>
          <Route exact path='/'>
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
          </Route>
          <Route path='*'>
          <ErrorBoundary>
            <span>error</span>
          </ErrorBoundary>
          </Route> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
