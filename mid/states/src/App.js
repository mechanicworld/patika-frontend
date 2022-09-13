import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
function App() {
  const [name, setName] = useState('Oguz');
  const [age, setAge] = useState(29);
  const [friends, setFriends] = useState(['Ozi', 'Kuzi', 'Luzi']);
  const [address,setAddress] = useState({title:'Istanbul',zip:'34100'});
  return (
    <div className="App">
      <h1>Hello! {name}</h1>
      <h1>{age}</h1>
      <button onClick={() => setName("Changed")}>Change Name</button>
      <button onClick={() => setAge(30)}>Change Age</button>

      <hr />
      <br /><br />

      {friends.map((friend, index) => (
        <div key={index}> {friend}</div>
      ))}

      <button onClick={() => setFriends([...friends, "New Friend"])}>Change Age</button>

      
      <hr />
      <br /><br />
      <h2>Address</h2>
      <div>{address.title} {address.zip}</div>
      <button onClick={() => setAddress({...address, title:'Ankara'})}>Change Adress</button>
    </div>
  );
}

export default App;
