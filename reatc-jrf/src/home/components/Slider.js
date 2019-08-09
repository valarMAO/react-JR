import React, { Component } from 'react'
import { Carousel } from 'antd';
import '../style.css';


class Slider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			enters:[{
				href:"jdcs",
				img:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png",
				title:"超市"
			},{
				href:"smdq",
				img:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png",
				title:"数码"
			},{
				href:"jdfs",
				img:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png",
				title:"服饰"
			},{
				href:"jdsx",
				img:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/27962/13/1445/4620/5c120b24Edd8c34fe/43ea8051bc50d939.png",
				title:"生鲜"
			},{
				href:"jddj",
				img:"//m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png",
				title:"到家"
			}]
		}
	}
	render() {
		return (
			<div className="slider-box">
				<Carousel autoplay className="slider">
					<div>
						<img className="slider-img" src="http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/72680/39/6572/140185/5d4b7bd3Eeed339a4/e0541a8b3cb5ab7c.jpg!cr_1125x549_0_72!q70.jpg.dpg"/>
					</div>
					<div>
						<img className="slider-img" src="//m.360buyimg.com/mobilecms/s750x366_jfs/t1/62352/14/6579/152144/5d48e866E8e139422/586d1ff967c724ce.jpg!cr_1125x549_0_72!q70.jpg.dpg"/>
					</div>
					<div>
						<img className="slider-img" src="//m.360buyimg.com/mobilecms/s750x366_jfs/t1/72680/39/6572/140185/5d4b7bd3Eeed339a4/e0541a8b3cb5ab7c.jpg!cr_1125x549_0_72!q70.jpg.dpg"/>
					</div>
					<div>
						<img className="slider-img" src="//m.360buyimg.com/mobilecms/s750x366_jfs/t1/44472/34/7477/129032/5d47fce4E8f9dbdac/de035956dc62f98b.jpg!cr_1125x549_0_72!q70.jpg.dpg"/>
					</div>
				</Carousel>
				<div className="list-box">
				{
					this.state.enters.map((item,index)=>{
						return (
							<div className="list" key={item.href}>
								<img src={item.img} alt={item.href} />
								<h4>{item.title}</h4>
							</div>
						)
					})
				}
				</div>
			</div>
		);
	}
}

export default Slider;