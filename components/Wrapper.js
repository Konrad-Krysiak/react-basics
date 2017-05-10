import React, { Component } from 'react'
import UserInfo from './UserInfo'

class Wrapper extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userIndex: 0,
			userName: 'konrad'
		}
	}

	// getRandomUserIndex(){
	// 	var actualIndex = this.state.userIndex
	// 	var max = this.props.user.length-1
	// 	var newIndex = Math.round(Math.random() * (max - 0) + 0) 
	// 	if (newIndex === actualIndex){
	// 		this.getRandomUserIndex()
	// 	}
	// 	else {
	// 		this.setState({userIndex: newIndex})
	// 	}
	// }
	
	handleChange(event) {
		this.setState({userName: event.target.value})
	}

	handleSubmit(event) {
		event.preventDefault()
		var index = this.props.user.map((e) => { 
			return e.username 
		}).indexOf(this.state.userName)
		this.setState({userIndex: index})
	}
	render() {
		return (
		<div>
			<UserInfo user={this.props.user} index={this.state.userIndex}/>
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input 
					type="text" 
					placeholder="Type in your todo" 
					value={this.state.userName}
					onChange={this.handleChange.bind(this)}
				/>
				<input type='submit' value='Submit'/>
			</form>
		</div>
		)
	}
}

export default Wrapper