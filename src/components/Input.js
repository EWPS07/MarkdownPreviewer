import React from 'react'
import ReactDOM from 'react-dom'
import marked from '../../node_modules/marked/lib/marked'
import CheatSheet from './CheatSheet'

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: '# large\n## medium\n### small\n\n**bold**\n*italics*\n~~strikethrough~~\n\n* Generic list item\n* Generic list item\n* Generic list item\n\n\n1. Numbered list item\n2. Numbered list item\n3. Numbered list item\n\n[Text to display](http://www.example.com)\n\n> This is a quote.\n>It can span multiple lines!\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| John     | Doe      | Male     |\n| Mary |Smith    | Female   |\n\n\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| John | Doe | Male |\n| Mary | Smith | Female |\n\n`var example = "hello!";`\nOr spanning multiple lines...\n```\nvar example = "hello!";\nalert(example);\n```'
    }
    this.update = this.update.bind(this)
  }
  update(e) {
    this.setState({
      inputText: e.target.value
    })
    this.createMarkup();
  }
  createMarkup() {
    return {
      __html: marked(this.state.inputText)
    };
  };
  render() {
    return (
      <div>   
        <div id='appContainer' className='container-fluid'>
          <div className='row-fluid'>
            <div className='col-xs-6 displays'>
              <h1 className='text-center'>Markdown</h1>
              <textarea id='mdArea' onChange={this.update} placeholder={this.state.inputText}></textarea>
            </div>
            <div className='col-xs-6 displays'>
              <h1 className='text-center'>Output</h1>
              <div id='muArea' dangerouslySetInnerHTML={this.createMarkup()} />
            </div>
          </div>
        </div>
        <div id='footer' className='container-fluid'>
          <div className='text-center row-fluid'>
            <span>This previewer was built by <a href='https://codepen.io/EWPS07'>Evan Paige</a></span>
          </div>
        </div>
      </div>
    )
  }
}

export default Input