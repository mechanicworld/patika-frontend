import React, { useState, useEffect } from 'react'


function Counter() {
  const [number, setNumber] = useState(0)
  const [name, setName] = useState('Oguz')
  useEffect(() => {
    console.log("State updated!! Number")
  }, [number])
  useEffect(() => {
    console.log("State updated!! Name ")
  }, [name])

  useEffect(() => {
    console.log("Component mounted!!")
    const interval = setInterval(() => {
      setNumber((x) => x + 1)
    }, 1000)
    return () => {
      console.log("unmounted")
      clearInterval(interval)

    }
  }, [])
  

  return (
    <div>
      {" "}
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click Increase</button>
      <hr />
      <h1>{name}</h1>
      <button onClick={() => setName("ozi")}>Click Name</button>
    </div>
  );
}

export default Counter;
