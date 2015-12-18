import React, { Component } from 'react';
import Header from './Header';
import MiddleContent from './MiddleContent';
import Sec2 from './Sec2';
import Footer from './Footer';

export class App extends Component {
  render() {
    return (
      <div className="">
        <Header />
        <MiddleContent />
        <Sec2 />
        <Footer />
      </div>
    );
  }
}