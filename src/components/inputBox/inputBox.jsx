import React from "react";
import CSSModules from "react-css-modules";
import style from "./inputBox.less";

@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "log" })
export default class InputBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }
  changeInput(v) {
    this.setState({ input: v });
  }
  render() {
    return (
      <div styleName="inputBox">
        <input
          type="text"
          onChange={e => {
            this.changeInput(e.target.value);
          }}
        />
        {this.state.input}
      </div>
    );
  }
}
