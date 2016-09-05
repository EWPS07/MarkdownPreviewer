import React from 'react'
import ReactDOM from 'react-dom'

// application components 
import Input from './Input'
import CheatSheet from './CheatSheet'

class Layout extends React.Component {
	render() {
		return(
			<div>
				<Input/>
				<CheatSheet/>
			</div>
		)
	}
}

export default Layout