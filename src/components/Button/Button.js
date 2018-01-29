import React, { Component } from "react";
import styled from "styled-components";

class Button extends Component {
  state = {
    isClicked: false
  };

  handleClick = () => this.setState({ isClicked: !this.state.isClicked });

  render() {
    const { children, ...other } = this.props;
    return (
      <StyledButton
        {...other}
        background={this.state.isClicked}
        onClick={this.handleClick}
      >
        {children}
      </StyledButton>
    );
  }
}

const StyledButton = styled.button`
  display: inline-flex;
  color: white;
  background: ${(props) => (props.background ? "blue" : "red")};
  height: 50px;
  width: 250px;
  border: none;
  appearance: none;
  align-items: center;
  justify-content: center;
`;

export default Button;
