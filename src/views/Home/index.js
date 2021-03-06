
import React from 'react';

import './style.less';

import PageTemplate from '_layout/PageTemplate';
import Slider from './Slider';
import Collapse1 from './Collapse1';
import CollapseMulti from './CollapseMulti';
import Tabs1 from './Tabs1';
import Tabs2 from './Tabs2';
import Tabs3 from './Tabs3';

export default function Home() {
	return (
		<PageTemplate>
			<section id="Home">
				<h1>Home Page</h1>
				<br />
				<div className="row justify-content-around">
					<div className="col-md-5">
						<h2>slider1</h2>
						<Slider id="slider1" />
					</div>
				</div>
				<br />
				<br />
				<div className="row justify-content-around">
					<div className="col-md-5">
						<h2> Collapse1 </h2>
						<Collapse1 />
					</div>
					<div className="col-md-5">
						<h2> CollapseMulti </h2>
						<CollapseMulti />
					</div>
				</div>
				<br />
				<br />
				<div className="row justify-content-around">
					<div className="col-md-3">
						<h2> Tabs1 </h2>
						<Tabs1 />
					</div>
					<div className="col-md-3">
						<h2> Tabs2 </h2>
						<Tabs2 />
					</div>
					<div className="col-md-3">
						<h2> Tabs3 </h2>
						<Tabs3 />
					</div>
				</div>
				<br />
				<br />
			</section>
		</PageTemplate>
	);
}
