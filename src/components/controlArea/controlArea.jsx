import React from 'react';
import CSSModules from 'react-css-modules';
import style from './controlArea.less';

@CSSModules(style, {allowMultiple:true, handleNotFoundStyleName:'log'})
export default class ControlArea extends React.Component{
	render(){
		return (<div styleName="controlArea">ControlArea</div>);
	}
}
