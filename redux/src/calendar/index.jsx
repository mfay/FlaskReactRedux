import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store.jsx';
import Layout from './layout.jsx';

const app = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>,
    app
);
