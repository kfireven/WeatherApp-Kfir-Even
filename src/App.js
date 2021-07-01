import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import Main from './components/Main/Main';

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
        <Main/>
        </Provider>
    )
  }
}

