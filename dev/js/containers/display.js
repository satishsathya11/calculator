import React from 'react';
import { connect } from 'react-redux';

class Display extends React.Component {
	constructor(props) {
		super(props);
		console.log(props)
	}
	render() {
		return (
			<div>
				<h3>{this.props.result}</h3>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		result: state.reducerNum.result,
	}
}
export default connect(mapStateToProps, null)(Display);