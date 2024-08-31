import React, { useEffect } from 'react'
import {get} from '../services/ApiEndPoints'
import { useDispatch } from 'react-redux'

export default function Admin() {

  
  useEffect(() => {
    const Getuer = async () => {
      try {
        const request = await get('/api/admin/getuser')
        const res = request.data;
        // console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    Getuer();
  },[])

  return (
    <div>Admin</div>
  )
}
