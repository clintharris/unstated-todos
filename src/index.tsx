import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unstated';
import 'modern-normalize/modern-normalize.css';

import App from '@src/App';

console.info('Starting up...');

ReactDOM.render(<Provider><App/></Provider>, document.getElementById('root'));