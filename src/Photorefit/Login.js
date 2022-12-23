import React from 'react'

const Login = () => {
  return (
    <div>
      <h2>Login form</h2>
      <form>
        <label for='userName'>user name</label><br />
        <input type='text' /><br />
        <label for='userName'>Password</label><br />
        <input type='password' /><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login