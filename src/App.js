import React, { Component } from 'react';
import Header from './Header';
import MiddleContent from './MiddleContent';

export class App extends Component {
  render() {
    return (
      <div className="Bgc(#f5f5f5)">
        <Header />
        <MiddleContent />
      </div>
    );
  }
}