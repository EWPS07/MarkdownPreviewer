import React from 'react'
import ReactDOM from 'react-dom'
import Row from '../../node_modules/react-bootstrap/lib/Row'
import Col from '../../node_modules/react-bootstrap/lib/Col'
import Well from '../../node_modules/react-bootstrap/lib/Well'
import Button from '../../node_modules/react-bootstrap/lib/Button'

class CheatSheet extends React.Component {
  render() {
    return(
      <div id='cheatSheet'className='hidden'>
        <Row className='text-left'>
          <Button id='BackBtn'>Back</Button>
        </Row>
        <Row>
          <h1>Emphasis</h1>
          <Well>
            <span>**bold**</span>
            <br/>
            <span>*italics*</span>
            <br/>
            <span>~~strikethrough~~</span>
          </Well>
        </Row>
        <Row>
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
        </Row>  
        <Row>
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
        </Row>
        <Row>
          <h1>Links</h1>
            <Well>
              <span>[Text to display](http://www.example.com)</span>
            </Well>
        </Row>
        <Row>
          <h1>Quotes</h1>
          <Well>
            <span>This is a quote.</span>
            <br/>
            <span>> It can span multiple lines!</span>
          </Well>
        </Row>
        <Row>
          <h1>Images</h1>
          <Well>
            <span>![](http://www.example.com/image.jpg)</span>
          </Well>
        </Row>
        <Row>
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
        </Row>
        <Row>
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
        </Row>
      </div>
    )
  }
}

export default CheatSheet
 
