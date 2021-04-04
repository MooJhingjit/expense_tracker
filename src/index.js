import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client'
import App from './App';
import './index.css';
import { Provider } from './context/context'

ReactDOM.render(
  <SpeechProvider appId="ce49b940-764b-4acc-ba2b-13d3d05c805c" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>
  , document.getElementById('root')
);