import React, { useState } from 'react'
import { post } from '../services/ApiEndPoints';
import {toast} from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { SetUser } from '../redux/AuthSlice';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit= async(e)=>{
        e.preventDefault();
          console.log(email,password)
          try {
              const request= await post('/api/auth/login',{email,password})
              const reponse= request.data 

              if (request.status==200) {
                if (reponse.user.role =='admin') {
                  navigate('/admin')
                }else if (reponse.user.role =='user') {
                   navigate('/')
                }
                toast.success(reponse.message)
                dispatch(SetUser(reponse.user))
              }
              console.log(reponse)
          } catch (error) {
            console.log(error)
          }
       }



    return (
        <div className='sign-up-container'>
            <form className='sign-up-form'
                onSubmit={handleSubmit}
            >
                <h2>Login</h2>

                <label htmlFor='email'>Email:</label>
                <input type="email" autoComplete='off' placeholder='email'
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor='password'>Password:</label>
                <input type="password" autoComplete='off' placeholder='*******'
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type='submit' >Login</button>

                <span>don't have an account ?  <span to={'/signup'}>Sign up</span> </span>
            </form>
        </div>
    )
}
