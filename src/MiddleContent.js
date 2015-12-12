import React, { Component } from 'react';

class Slogan extends Component {
  render() {
    return (
      <div className="M(a) Pos(a) T(0) Start(0) B(0) H(45px)">
        <div className="Fz(3rem) Fw(700)">Read, Record, Share and Love.</div>
        <div className="Mt(5px) C(#a7a7a7)">Read Bible everyday will make you happy and close to God.</div>
      </div>
    );
  }
}

class RightButtons extends Component {
  render() {
    return (
      <div className="W(20%)"></div>
    );
  }
}

class MiddleContent extends Component {
  render() {
    return (
      <div className="Mx(5%) Bxz(bb) Pos(r) H(80vh)">
        <Slogan />
        <RightButtons />
      </div>
    );
  }
}

export default MiddleContent;
