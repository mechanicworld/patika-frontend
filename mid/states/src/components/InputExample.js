import React, { useState } from 'react'
import { formatDiagnostic } from 'typescript'

function InputExample() {
  const [form, setForm] = useState({ name: '', surname: '' })

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <input name='name' type="text" value={form.name} onChange={onChangeInput} />
      <input name='surname' type="text" value={form.surname} onChange={onChangeInput} />
      <br />
      <br />
      {form.name} {form.surname}
    </div>
  )
}

export default InputExample