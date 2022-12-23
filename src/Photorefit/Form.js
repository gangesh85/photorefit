import React from 'react'

const Form = () => {
  return (
    <div>
        <form>
          <label for='fName'>First Name</label><br/>
          <input type='text' id='fName' name='fName' placeholder='Your First Name' /><br />
          <label for='lName'>Last Name</label><br/>
          <input type='text' id='lName' name='lName' placeholder='Your last name'/><br/>
          <label for='lName'>Contact</label><br/>
          <input type='text' id='contact' name='contact' placeholder='Your contact'/><br/>
          <label for='lName'>E-mail</label><br/>
          <input type='text' id='email' name='email' placeholder='Your email address'/><br/>
          <label for='textarea'>Address</label><br />
          <textarea /><br />
          <select id='country' name='country'>
            <option>Australia</option>
            <option>Canada</option>
            <option>Europe</option>
            <option>United State</option>
          </select><br />
          <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form