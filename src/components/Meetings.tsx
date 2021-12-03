import React from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import './App.css';

const Meetings = () => {
  return (
    <BrowserRouter basename='/meetings'>
      <div className="div" style={{ fontSize: '100px' }}>
        Meetings
        <Link to="/one">ONE</Link>
        <Link to="/two">TWO</Link>
        <Route path="/one" render={() => <div>ONE</div>} />
        <Route path="/two" render={() => <div>TWO</div>} />
      </div>
    </BrowserRouter>
  );
};

export default Meetings;
