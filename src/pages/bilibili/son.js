import React from "react";
import PropTypes from "prop-types";
//propTypes
//defaultProps
class Myson extends React.Component {
  state = {};
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
  };
  static defaultProps = {
    name: "小溪流",
    age: 12,
  };
  tochangeName = () => {
    let { changeName } = this.props;
    // console.log(changeName);
    changeName();
  };
  render() {
    // console.log(this.props);
    const { name, age } = this.props;
    return (
      <div>
        <span onClick={this.tochangeName}>{name}</span>
        <span>{age}</span>
        {this.props.children}
      </div>
    );
  }
}

export default Myson;
