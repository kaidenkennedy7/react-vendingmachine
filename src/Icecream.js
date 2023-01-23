import React from 'react';
import { Link } from 'react-router-dom';
import icecream from './images/icecream.jpg';

function Icecream() {
	return (
		<div>
			<h1>Here is your Ice Cream!</h1>
			<img style={{ width: '400px', height: '400px' }} src={icecream} alt='icecream' />
			<button>
				<Link exact to='/'>
					Back
				</Link>
			</button>
		</div>
	);
}

export default Icecream;