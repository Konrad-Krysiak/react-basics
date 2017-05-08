import React, { Component } from 'react'

class Wrapper extends Component {
	render() {
		return <div>{this.props.user.username}!!</div>
	}
}

export default Wrapper