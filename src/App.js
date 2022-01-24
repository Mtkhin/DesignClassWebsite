import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Contact from './Contact';
import Courses from './Courses';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';

const App=()=> {
  return(
    <>
    <Navbar />
    <Switch>
   <Route exact path="/" component={Home}></Route>
   <Route exact path="/about" component={About}></Route>
   <Route exact path="/courses" component={Courses}></Route>
   <Route exact path="/contact" component={Contact}></Route>
   <Redirect to="/"></Redirect>
   </Switch>
   </>
  );
}
export default App;