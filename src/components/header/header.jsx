import React from 'react';
import CSSModules from 'react-css-modules';
import style from './header.less';

@CSSModules(style, {allowMultiple:true, handleNotFoundStyleName:'log'})
export default class Header extends React.Component{
	render(){
		return (<div styleName="header">Header</div>);
	}
}
