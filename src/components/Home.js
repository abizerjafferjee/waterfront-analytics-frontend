import React from 'react';

import Services from './Services'
import Customers from './Customers'
import Teams from './Teams'
import ContactSection from './ContactSection'

const Home = () => {

  return (
    <>
        <Customers className="container-fluid section-container" />
        <Services className="container-fluid section-container" />
        <Teams className="container-fluid section-container" />
        <ContactSection className="container-fluid section-container" />
    </>
  );
}

export default Home;