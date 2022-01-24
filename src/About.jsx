import React from 'react';
import Commons from './Commons';
import web1 from '../src/Images/about.png'

const About=()=> {
  return(
    <Commons name='Welcome to BeeDesigns' imgsrc={web1} visit='/Contact' btnname='Contact Us'></Commons>
  );
}

export default About;