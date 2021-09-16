import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import index from './reducers/index';
import App from './components/App';

const initialState = [
  { id: Math.floor(Math.random() * 100), title: 'Book1', category: 'Action' },
  { id: Math.floor(Math.random() * 100), title: 'Book2', category: 'Biography' },
  { id: Math.floor(Math.random() * 100), title: 'Book3', category: 'History' },
];

const store = createStore(index, { books: initialState, filter: 'All' });

const wrapper = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    {wrapper}
  </React.StrictMode>,
  document.getElementById('root'),
);
