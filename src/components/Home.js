import React from 'react';
import Accordion from './child-comp/AccordionItem';
import Head from './child-comp/Head';

const Home = () => {
  return (
  
    <div className='container'>
    <Head/>
    <Accordion/>
    </div>
  
  );
};

export default Home;
