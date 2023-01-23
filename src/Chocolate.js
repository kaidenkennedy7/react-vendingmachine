import React from 'react';
import { Link } from 'react-router-dom';
import chocolate from './images/91vp_d4b2_150811.jpg';

function Chocolate() {
	return (
		<div>
			<h1>Here is your Chocolate!</h1>
			<img style={{ width: '400px', height: '400px' }} src={chocolate} alt='chocolate' />
			<button>
				<Link exact to='/'>
					Back
				</Link>
			</button>
		</div>
	);
}

export default Chocolate;