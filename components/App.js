import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import actions from '../redux/actions'
import Wrapper from './Wrapper'

class App extends Component {

	render() {
		return <Wrapper user={this.props.user} actions={this.props.actions} />
	}

}

function mapStateToProps(state) {
	return state
}
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
