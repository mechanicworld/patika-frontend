
import './App.css';
import Header from './components/Header';
import React from 'react';
import User from './components/User';

function App() {
  // Without JSX
  //return React.createElement('div', null,'Hello')

 
  return (
    <div>
      <Header />
      <User
        name={"Oguz"}
        surname="Demir"       
        age={29}
        friends={['ozi', 'mozi', 'luzi']}
        address={{
          title: 'Atasehir/Istanbul',
          zip: 34755
        }} />
    </div>
  )


}

export default App;
