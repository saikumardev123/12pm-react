import './App.css';
//import * as React from 'react';
import React, { Suspense } from 'react';
import { useState } from 'react';

//import FirstComponent from './FirstComponent';
const FirstComponent = React.lazy(() => import('./FirstComponent'))
//import SecondComponent from './SecondComponent';
const SecondComponent = React.lazy(() => import('./SecondComponent'))

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">

      {counter == 5 ? <Suspense fallback={<div>Loading..</div>}><FirstComponent></FirstComponent></Suspense> : ""}

      {counter == 7 ? <Suspense fallback={<div>Loading..</div>}><SecondComponent></SecondComponent> </Suspense> : ""}


      <button onClick={() => {
        setCounter(counter + 1);
      }}>Update</button>
      <h1>{counter}</h1>

    </div>
  );
}
export default App;
