import React from "react";
import s from "./Italic.module.css";

class Italic extends React.Component {
  state = {
    isItalic: false,
  };

  switch = () => {
    this.setState({ isItalic: this.state.isItalic ? false : true });
  };

  render() {
    return (
      <div className={s.container}>
        <h1 className={s.header}>Italic style task</h1>
        <p
          onClick={this.switch}
          className={`${s.text} ${this.state.isItalic ? s.italic : ""}`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          molestiae facere esse deleniti quasi? Incidunt nobis animi molestias
          saepe magnam!
        </p>
      </div>
    );
  }
}

export default Italic;
