import React, { useState } from 'react'

import { post } from '../services/ApiEndPoints';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password);
    try {
      const request = await post('/api/auth/register', { name, email, password });
      const response = request.data;
      if (request.status == 200) {
        toast.success(response.message);
      }
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='sign-up-container'>
      <form className='sign-up-form'
        onSubmit={handleSubmit}
      >
        <h2>Register</h2>

        <label htmlFor='name'>Name:</label>
        <input type="name" autoComplete='off' placeholder='name'
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor='email'>Email:</label>
        <input type="email" autoComplete='off' placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor='password'>Password:</label>
        <input type="password" autoComplete='off' placeholder='*******'
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type='submit' >Register</button>

        <span>Have an account <Link to={'/login'}>Login</Link> </span>
      </form>
    </div>
  )
}
