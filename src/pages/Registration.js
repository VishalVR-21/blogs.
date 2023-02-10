import { useState } from 'react';
import { Await, Navigate, redirect } from 'react-router-dom';
 import axios from 'axios'
export default function Registration() {
 
  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect,setRedirect] =  useState(false)
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = async(e) => {
    console.log("handle submit")
    // e.preventDefault();
      // await fetch('http://localhost:4000/test',{
      //   method:'POST',
      //   body:JSON.stringify({name,password}),
      //   Headers:{'Content-Type':'application/json'}
      // })
     const response = await fetch('http://localhost:4000/login',{
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {'Content-Type':'application/json'},
        credential:'include'
      })
      console.log("fetching done")
      if(response.status==200 || response.body=="ok")
      {
      setRedirect(true);
      }
      else
      {
        alert("registration failed")
        return <Navigate  to='/'/>
      }
  };
  if(redirect)
  {
    return <Navigate to={'/'}/>
  }
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
 
  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        {/* Labels and inputs for form data 
         <label className="label">Name</label>
        <input onChange={handleName} className="input"
          value={name} type="text" />
  */}
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" />
 
        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" />
 
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}