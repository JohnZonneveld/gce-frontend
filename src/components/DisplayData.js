// src/components/DisplayData.js
import React from 'react';

class DisplayData extends React.Component {
  	render() {
		return (
			<div>
				<h1>{this.props.member.name}</h1>
				<h1>{this.props.member.bike}</h1>
			</div>
		)
  	}
}

export default DisplayData