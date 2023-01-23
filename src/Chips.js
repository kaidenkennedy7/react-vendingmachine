import React from 'react';
import { Link } from 'react-router-dom';
import chips from './images/Chips.png';

function Chips() {
	return (
		<div>
			<h1>Here are your chips!</h1>
			<img style={{ width: '400px', height: '400px' }} src={chips} alt='chips' />
			<button>
				<Link exact to='/'>
					Back
				</Link>
			</button>
		</div>
	);
}

export default Chips;