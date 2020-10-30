import React from "react";
import s from "./SignIn.module.css";

class SignIn extends React.Component {
  state = {
    isSignedIn: false,
  };

  signIn = () => {
    setTimeout(() => {
      this.setState({ isSignedIn: true });
    }, 3000);
  };

  render() {
    return (
      <div className={s.container}>
        <h1 className={s.header}>Sign in task</h1>
        {this.state.isSignedIn ? (
          ""
        ) : (
          <button onClick={this.signIn}>Sign in</button>
        )}
        <div className={s.greeting}>
          {this.state.isSignedIn ? "Hello User!!!" : ""}
        </div>
      </div>
    );
  }
}

export default SignIn;
