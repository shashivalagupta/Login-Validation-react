import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConfigureStore from './Store/ConfigureStore';
import {Provider} from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store=ConfigureStore();
ReactDOM.render(
    <Provider store={store}>
        <App/>
     </Provider>
, document.getElementById('root'));
 
serviceWorker.unregister();
