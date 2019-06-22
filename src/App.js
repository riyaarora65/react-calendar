import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import  RemindersCalendar from './pages';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <div className="content">
          <Route path="/calendar" component={RemindersCalendar} />
        </div>
      </div>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.any.isRequired
};

export default App;
