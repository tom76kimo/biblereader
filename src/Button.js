import React from 'react';
import Classnames from 'classnames';

class Button extends React.Component {
  render() {
    const buttonClass = Classnames('Bdrs(4px) O(n) Fz(15px) Bd(0) Cur(p) D(ib) Px(30px) Py(10px) Bxsh(material) ', {
      'Bgc(#fcfdfe) Bgc(#ebebed):h': !this.props.type,
      'C(white) Bgc(#f80e5d) Bgc(#e70d5c):h': this.props.type === 'primary',
    });

    return (
      <button style={this.props.style} onClick={this.onClick.bind(this)} className={buttonClass}>{ this.props.children }</button>
    );
  }

  onClick(e) {
    e.preventDefault();
  }
}

export default Button;
