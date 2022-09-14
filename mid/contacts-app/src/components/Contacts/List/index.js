import React, { useState, useEffect } from 'react'

function List({ contacts }) {

  const [filterText, setFilterText] = useState('')
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toString().toLowerCase())
    })
  })
  return (
    <div>
      <input
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="Search" />
      <ul className='list'>{filtered.map((contact, index) => (
        <li key={index}>
          <span>
            {contact.fullName}
          </span>
          <span>
            {contact.phoneNumber}
          </span>
        </li>
      ))}</ul>
      <p>Total contacts: {filtered.length}</p>
    </div>
  )
}

export default List