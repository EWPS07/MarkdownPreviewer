// import React from 'react'
// import ReactDOM from 'react-dom'

// // application components 
// import Input from './Input'
// import CheatSheet from './CheatSheet'

// class Layout extends React.Component {
// 	render() {
// 		return(
// 			<div>
// 				<Input/>
// 			</div>
// 		)
// 	}
// }

// export default Layout

import React from 'react'
import ReactDOM from 'react-dom'
import Row from '../../node_modules/react-bootstrap/lib/Row'
import Col from '../../node_modules/react-bootstrap/lib/Col'
import Well from '../../node_modules/react-bootstrap/lib/Well'
import Button from '../../node_modules/react-bootstrap/lib/Button'
import Modal from '../../node_modules/react-bootstrap/lib/Modal'

import Input from './Input'

const Layout = React.createClass({
  getInitialState() {
    return { show: false };
  },
  render() {
    let close = () => this.setState({ show: false});
    return(
  		<div id='layout'className='text-center modal-container'>
  			<div id='mainTitle' className='text-left'>
            	<h1>Live Markdown Preview</h1>
            	<br/>
            	<Button className='appBtn'onClick={() => this.setState({ show: true})}>CheatSheet</Button>
      		</div>
        	<Input className='text-center'/>
        	<Modal className='text-left'id='cheatSheet'show={this.state.show}onHide={close}container={this}aria-labelledby="contained-modal-title">
          		<Modal.Header>
            		<Modal.Title id='contained-modal-title'>Markdown</Modal.Title>
          		</Modal.Header>
          		<Modal.Body>
		            <h1>Emphasis</h1>
		            <Well>
		              <span>**bold**</span>
		              <br/>
		              <span>*italics*</span>
		              <br/>
		              <span>~~strikethrough~~</span>
		            </Well>
		            <h1>Headings</h1>
		            <Well>
		              <span># Big header</span>
		              <br/>
		              <span>## Medium header</span>
		              <br/>
		              <span>### Small header</span>
		              <br/>
		              <span>#### Tiny header</span>
		            </Well>
		            <h1>Lists</h1>
		            <Well>
		              <span>* Generic list item</span>
		              <br/>
		              <span>* Generic list item</span>
		              <br/>
		              <span>* Generic list item</span>
		              <br/>
		              <br/>
		              <span>1. Numbered list item</span>
		              <br/>
		              <span>2. Numbered list item</span>
		              <br/>
		              <span>3. Numbered list item</span>
		            </Well>
		            <h1>Links</h1>
		              <Well>
		                <span>[Text to display](http://www.example.com)</span>
		              </Well>
		            <h1>Quotes</h1>
		            <Well>
		              <span>This is a quote.</span>
		              <br/>
		              <span>> It can span multiple lines!</span>
		            </Well>
		            <h1>Images</h1>
		            <Well>
		              <span>![](http://www.example.com/image.jpg)</span>
		            </Well>
		            <h1>Tables</h1>
		            <Well>
		              <span>| Column 1 | Column 2 | Column 3 |</span>
		              <br/>
		              <span>| -------- | -------- | -------- |</span>
		              <br/> 
		              <span>| John     | Doe      | Male     |</span>
		              <br/> 
		              <span>| Mary     | Smith    | Female   |</span>
		            </Well>
		            <h1>Displaying Code</h1>
		            <Well>
		              <span>`var example = "hello!";`</span>
		              <br/>
		              <span>Or spanning multiple lines...</span>
		              <br/>
		              <span>```</span>
		              <br/>
		              <span>var example = "hello!";</span>
		              <br/>
		              <span>alert(example);</span>
		              <br/>
		              <span>```</span>
		            </Well>
            	</Modal.Body>
            	<Modal.Footer>
              		<Button className='appBtn'onClick={close}>close</Button>
            	</Modal.Footer>
        	</Modal>
      </div>
    )
  }
})

export default Layout