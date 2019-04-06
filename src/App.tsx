import React, { Component } from 'react';
import { FaFreeCodeCamp } from 'react-icons/fa';
import marked from 'marked';
import './App.css';
import { markdownInitialText } from './constants';
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
        <div className='input-group w-75 m-auto h-25'>
          <div className='input-group-prepend'>
            <div className='input-group-text'>
              <FaFreeCodeCamp size={36} />
              <span className='ml-2 editor'>Editor</span>
            </div>
          </div>
          <textarea
            name='markdown'
            value={markdown}
            className='form-control'
            aria-label='With textarea'
            onChange={this.markdownChange}
          />
        </div>
        <div className='mockdown-output'>Markdown Output</div>

        <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
      </div>
    );
  }
}

export default App;
