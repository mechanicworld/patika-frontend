import React from 'react'
import { useFormik } from "formik";
import validationSchema from './validation';
function Signup() {
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: '',
      passwordConfirm: ''
      // firstName: "Ozi",
      // lastName: "Demir",
      // gender: "female",
      // hobies: [],
      // country: 'Turkey'
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      console.log(values)
    },
    validationSchema: validationSchema
  });
  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <br />
        <input
          onChange={handleChange}
          id="email"
          name="email"
          type="email"
          value={values.email}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && <div className="error">{errors.email}</div>}
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          onChange={handleChange}
          id="password"
          name="password"
          type="password"
          value={values.password}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && <div>{errors.password}</div>}
        <br />
        <br />
        <label htmlFor="passwordConfirm">Password Confirm</label>
        <br />
        <input
          onChange={handleChange}
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          value={values.passwordConfirm}
          onBlur={handleBlur}
        />
        {errors.passwordConfirm && touched.passwordConfirm && <div>{errors.passwordConfirm}</div>}
        <br />
        <br />

        {/*  Different Input Examples =>  */}

        {/*  <label htmlFor="firstName">First Name</label>
  <br />
  <input value={values.firstName} onChange={handleChange} id="firstName" name="firstName" />
  <br />
  <br />
  <label htmlFor="lastName">Last Name</label>
  <br />
  <input value={values.lastName} onChange={handleChange} id="lastName" name="lastName" />
  <br />
  <br />
  <span>Female</span>
  <input
    onChange={handleChange}
    name="gender"
    value="female"
    type={"radio"}
    checked={values.gender === 'female'}
  />
  <span>Male</span>
  <input
    onChange={handleChange}
    name="gender"
    value="male"
    type={"radio"}
    checked={values.gender === 'male'}
  />
  <br />
  <br />
  <div>
    <input type="checkbox" name='hobies' value='Football' onChange={handleChange} />
    Football
  </div>
  <div>
    <input type="checkbox" name='hobies' value='Cinema' onChange={handleChange} />
    Cinema
  </div>
  <div>
    <input type="checkbox" name='hobies' value='Photography' onChange={handleChange} />
    Photography
  </div>

  <br />
  <select name="country" value={values.country} id="" onChange={handleChange}>
    <option value="turkey">Turkey</option>
    <option value="england">The United Kingdom</option>
    <option value="america">United States of America</option>
  </select>
*/}
        <button type="submit">Submit</button>
        <br />
        <code>{JSON.stringify(values)}</code>
      </form></>
  )
}

export default Signup