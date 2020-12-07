import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dog from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Dog />, document.getElementById('root'));
registerServiceWorker();
