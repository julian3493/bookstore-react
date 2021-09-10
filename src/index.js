import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import index from './reducers/index';

const initialState = [
  { id: Math.floor(Math.random() * 100) + 1, title: 'Book1', category: 'Action' },
  { id: Math.floor(Math.random() * 100) + 1, title: 'Book2', category: 'Biography' },
  { id: Math.floor(Math.random() * 100) + 1, title: 'Book3', category: 'History' },
];

const store = createStore(index, { books: initialState });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
