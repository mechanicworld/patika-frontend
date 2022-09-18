import logo from './logo.svg';
import './App.css';
import { useState, useMemo,useCallback } from 'react'
import Header from './components/Header';
function App() {
  const [number, setNumber] = useState(0)

  // const data = useMemo(() => {
  //   // non-primitive prop equality
  //   return calculateObject()
  // }, [])

  const increment = useCallback(() => {
    setNumber(x => x + 1)
  },[])

  return (
    <div className="App">
      {/* <Header number={number < 5 ? 0 : number} data={data} /> */}
      <Header increment={increment}/>
      <h1>{number}</h1>
      

    </div>
  );
}

// function calculateObject() {
//   console.log('Calculating...')
//   for (let i = 0; i < 1000000; i++) {

//   }
//   console.log('Calculation completed.')
//   return { name: 'Oguz' }
// }
export default App;
