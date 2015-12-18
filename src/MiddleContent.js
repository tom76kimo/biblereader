import React, { Component } from 'react';
import Button from './Button';

class Slogan extends Component {
  render() {
    return (
      <div className="M(a) Pos(a) T(0) Start(0) B(10%) H(125px)">
        <div className="Fz(3rem) Fw(700)">Read, Record, Share and Love.</div>
        <div className="Mt(5px) C(#a7a7a7)">Read Bible everyday will make you happy and close to God.</div>
        <div className="Mt(30px)">
          <Button style={{marginRight: 30}}>See Rank</Button>
          <Button type="primary">Start reading</Button>
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
      <div>
        <div className="Bgc(#f5f5f5)">
          <div className="Mx(5%) Bxz(bb) Pos(r) H(70vh) ">
            <Slogan />
            <RightButtons />
          </div>
        </div>
      </div>
    );
  }
}

export default MiddleContent;
