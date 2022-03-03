import React from 'react';
import Header from './Header'
import Footer from './Footer'
import News from './News'
import './link.css'


const Main = () => {

    return <div className="content">
      <Header />
      <News />
      <Footer />
    </div>

}

export default Main;