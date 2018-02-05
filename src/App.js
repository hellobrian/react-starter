import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Footer from "components/Footer/Footer";
import AddTodo from "containers/AddTodo";
import VisibleTodoList from "containers/VisibleTodoList";
import "App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
