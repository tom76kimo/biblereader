import React, { Component } from 'react';

class AppTitle extends Component {
  render() {
    return (
      <div className="Fz(23px) C(white)">Bible Reader 3</div>
    );
  }
}

class RightBox extends Component {
  render() {
    return (
      <div className="Pos(a) End(0) T(0)">
        <a href="/auth/google">Sign In with Google</a>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="Bgc(#6d00f6) W(100%) Px(20px) H(70px) Lh(70px) Bxsh(material) Bxz(bb)">
        <AppTitle />
        <RightBox />
      </div>
    );
  }
}

export default Header;
