import React, { Component } from 'react';
import { FaFreeCodeCamp } from 'react-icons/fa';
import marked from 'marked';
import { markdownInitialText } from './constants';
import './App.css';

marked.setOptions({
  breaks: true
});

interface AppProps {}
interface AppState {
  [markdown: string]: string;
}
class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      markdown: markdownInitialText
    };
  }

  markdownChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    const { markdown } = this.state;
    return (
      <div className='App container'>
        <div className='my-5 w-75 mx-auto h-50 d-flex flex-column'>
          <div className='input-group-text editor-header'>
            <FaFreeCodeCamp size={36} />
            <span className='ml-2 editor'>Editor</span>
          </div>
          <textarea
            id='editor'
            name='markdown'
            value={markdown}
            className='form-control flex-grow-1'
            aria-label='With textarea'
            onChange={this.markdownChange}
          />
        </div>
        <div className='mockdown-output-title'>
          <FaFreeCodeCamp size={36} />
          Markdown Output
        </div>
        <div
          id='preview'
          className='mockdown-output'
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    );
  }
}

export default App;
