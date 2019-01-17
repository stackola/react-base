import React from 'react';
import CSSModules from 'react-css-modules';
import style from './controlArea.less';

@CSSModules(style, {allowMultiple:true, handleNotFoundStyleName:'log'})
export default class ControlArea extends React.Component{
	constructor(props) {
		super(props)
	
		this.state = {
			 angle:0
		}
	}
	setAngle(a){
		this.setState({angle:a-225});
	}
	dragStart(e){
		console.log("drag start!", e);
	}
	drag(e){
		var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		let centerX=w/2;
		let centerY=h/2;
		let xOffset = e.clientX-centerX;
		let yOffset = e.clientY- centerY;
		this.setAngle(Math.atan(yOffset/xOffset)*(180/Math.PI));
	}
	render(){
		return (<div styleName="controlArea"  style={{transform:"rotate("+this.state.angle+"deg)"}}>
			<div styleName="angleButton" onDrag={(e)=>{this.drag(e)}} draggable onDragStart={(e)=>{this.dragStart(e)}}></div>
			hi
		</div>);
	}
}
