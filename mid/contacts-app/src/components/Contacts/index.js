import React, { useState, useEffect } from 'react'
import List from './List'
import Form from './Form'
import './styles.css'
function Contacts() {



  const [contacts, setContacts] = useState(
    [
      { fullName: 'Ozi', phoneNumber: 123123123 },
      { fullName: 'Kozi', phoneNumber: 123123123 },
      { fullName: 'Mozi', phoneNumber: 123123123 },
      { fullName: 'Lozi', phoneNumber: 123123123 },
      { fullName: 'Sozi', phoneNumber: 123123123 }
    ])

  useEffect(() => console.log(contacts), [contacts])
  return (
    <>

      <div id='container'>
        <h1>Contacts</h1>
        <List contacts={contacts} />
        <Form addContact={setContacts} contacts={contacts} />

        
      </div>
    </>
  )
}

export default Contacts