import React, { Component } from 'react'

class UserInfo extends Component {
	render() {
		return (
		<div>
			<div>Imie: {this.props.user[this.props.index].username}</div>
			<div>Nazwisko: {this.props.user[this.props.index].surname}</div>
			<div>Wiek: {this.props.user[this.props.index].age}</div>
		</div>
		)
	}
}

export default UserInfo