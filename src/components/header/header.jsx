import React from "react";
import CSSModules from "react-css-modules";
import style from "./header.less";

@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "log" })
export default class Header extends React.Component {
	constructor(p) {
		super(p);
		this.state = { color: "red" };
	}
	clicked() {
		this.setState({ color: this.state.color == "red" ? "blue" : "red" });
	}
	render() {
		return (
			<div
				onClick={() => {
					this.clicked();
				}}
				styleName="header"
				style={{ background: this.state.color }}
			>
				Header
			</div>
		);
	}
}
