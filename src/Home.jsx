import React from 'react';
import Commons from './Commons';
import web from '../src/Images/home.png'

const Home=()=> {
  return(
   <Commons name='Lets be creative' imgsrc={web} visit='/Courses' btnname='Get Started'></Commons>
  );
}

export default Home;