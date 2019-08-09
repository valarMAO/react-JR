import React, { Component } from 'react'
import './style.css';

class Panel extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div className="title">
				<h3>-{this.props.title}-</h3>
				{this.props.children}
			</div>
		);
	}
}
export default Panel;