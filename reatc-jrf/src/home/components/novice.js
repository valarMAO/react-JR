import React, { Component } from 'react'
import { Carousel } from 'antd';
import Panel from '../../comments/panel.js'
import '../style.css';


class Novice extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<Panel title="新手特权">
				<section className="content">
					<div className="item item-first">
						<h4>下载APP<span className="red">送888元礼包</span></h4>
						<p className="gray">新手专享</p>
						<img src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100" alt=""/>
					</div>
					<div className="item">
						<ul className="item-right">
							<li className="item-right-first">
								<img src="//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=200&height=200" alt=""/>
								<h4 className="red">领128元新手礼包</h4>
								<p className="gray">立即开通</p>
							</li>
							<li>
								<img src="//img12.360buyimg.com/jrpmobile/jfs/t4804/179/657713323/5908/66dce262/58e6095fNd3dc3f39.png?width=100&height=100" alt=""/>
                        		<h4>打白条<span className="red">享免息</span></h4>
                        		<p className="gray">立即开通享豪礼</p>
							</li>
						</ul>
					</div>
				</section>
			</Panel>
		);
	}
}

export default Novice;