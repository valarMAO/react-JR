import React, { Component } from 'react'
import { Divider, Button } from 'antd';
import Slider from './components/Slider';
import Novice from './components/novice';
import './style.css';


class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div>
				<div className="header">
					<span className="left">
						<em>登录</em>
						<Divider type="vertical" />
						<em>注册</em>
					</span>
					<Button className="btn" type="danger" size="small">APP下载</Button>
				</div>
				<Slider/>
				<Novice/>
			</div>
		);
	}
}

export default Home;