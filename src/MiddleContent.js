import React, { Component } from 'react';
import Button from './Button';

class Slogan extends Component {
  render() {
    return (
      <div className="M(a) Pos(a) T(0) Start(0) B(0) H(125px)">
        <div className="Fz(3rem) Fw(700)">Read, Record, Share and Love.</div>
        <div className="Mt(5px) C(#a7a7a7)">Read Bible everyday will make you happy and close to God.</div>
        <div className="Mt(15px)">
          <Button style={{marginRight: 30}}>See Rank</Button>
          <Button type="primary">See Rank</Button>
        </div>
      </div>
    );
  }
}

class RightButtons extends Component {
  render() {
    return (
      <div className="W(20%)">

      </div>
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
