import React from 'react'
import Navbar from './components/layout/Navbar'
import  Index from './components/layout/Index'
import  Lyrics from './components/tracks/Lyrics'
import Footer from './components/Footer'

import {Provider} from './Context'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
 
function App() {
  return (
    <Provider>
      <Router>
      <React.Fragment>
        <Navbar></Navbar>
        <Switch>
          
          <Route exact path="/" component={Index}></Route>
          <Route exact path='/lyrics/track/:id' component={Lyrics}></Route>

        </Switch>
        <Footer></Footer>
      </React.Fragment>
    </Router>
    </Provider>
    

  );
}

export default App;
