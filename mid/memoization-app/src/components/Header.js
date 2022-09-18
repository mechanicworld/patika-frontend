import React from 'react'

function Header({ number, data, increment }) {
  console.log("Header component re-rendered")
  return (
    <>
      <div>Header - {number}</div>
      <button onClick={increment}>Click</button>
      {/* <code>{JSON.stringify(data)}</code> */}
    </>
  )
}
// React memo compare the state of props and decide it is going to render or not !!!!
export default React.memo(Header)