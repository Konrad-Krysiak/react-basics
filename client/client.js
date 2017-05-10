import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

let initialState = {
	user: [{	
		username: 'konrad',
		surname: 'krysiak',
		age: 18
	},
	{
		username: 'janusz',
		surname: 'wojciechowski',
		age: 50
	},
	{
		username: 'sandra',
		surname: 'komor',
		age: 19,
	},
	{
		username: 'natalia',
		surname: 'wojciechowska',
		age: 21,
	}]
}

let store = configureStore(initialState)

render(
	<Provider store={store}>
		<App/>
	</Provider>,
    document.getElementById('app')
)