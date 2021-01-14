import './App.css';
import { applyMiddleware, createStore } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import { RootReducer } from './reducers/RootReducer';
import axios from 'axios';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { InitialState } from './initialState';
import React from 'react';
import { ListScreenContainer } from './screens/ListScreen';


const client = axios.create({
  baseURL: '',
  responseType: 'json'
})

let store = createStore(
  RootReducer,
  InitialState,
  applyMiddleware(axiosMiddleware(client), ReduxThunk)
);

export const dispatch = store.dispatch;

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router basename={'/'}>
          <switch>
            <Route exact path={'/'} component={ListScreenContainer} />
          </switch>
        </Router>
      </Provider>
    )
  }
} 

export default App;
