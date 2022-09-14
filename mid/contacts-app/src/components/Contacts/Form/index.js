import React, { useState, useEffect } from "react";


const initialFormValues = { fullName: '', phoneNumber: '' };

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues)

  useEffect(() => setForm(initialFormValues), [contacts])
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (form.fullName === '' || form.phoneNumber === '') {
      return false
    }
    addContact([...contacts, form])

    console.log(form)
  }
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          onChange={onChangeInput}
          name="fullName"
          value={form.fullName}
          placeholder="Full Name" />
      </div>
      <div>
        <input
          onChange={onChangeInput}
          name="phoneNumber"
          value={form.phoneNumber}
          placeholder="Phone number" />
      </div>
      {form.fullName} {form.phoneNumber}
      <div className="btn">
        <button >Add</button>
      </div>
    </form>
  );
}

export default Form;
