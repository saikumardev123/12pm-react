import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import ErrorBoundary from './ErrorBoundary';
import React from 'react';

function App() {

  // 4 lines of code

  return (
    <React.Fragment>
      <ErrorBoundary>
        <Counter></Counter>
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default App;
