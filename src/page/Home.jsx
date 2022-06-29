import React from 'react';
import {  useSelector, useDispatch } from 'react-redux';
import '../App.css';
import {Link} from 'react-router-dom'

export default function Home() {
  
  const {users}= useSelector(state => state.data);
  const dispatch= useDispatch();

  const deleteItem=(id)=>{
    console.log('On delete function')
  }

  return (
    <div className='contactTable'>
      <div className='contactRow'>
      <table className='table'>
        <tr className='tr'>
          <th className='th'>Sr. No.</th>
          <th className='th'>Name</th>
          <th className='th'>Email</th>
          <th className='th'>Phone</th>
          <th className='th'>Address</th>
          <th className='th'>Action</th>
        </tr>
        {users.map((item, index)=>{
            return(<tr className='tr' key={index}>
            <td className='td'>{index +1}</td>
            <td className='td'>{item.name}</td>
            <td className='td'>{item.email}</td>
            <td className='td'>{item.phone}</td>
            <td className='td'>{item.address}</td>
            <td className='td' onClick={()=>deleteItem(item.id)}>
              {/* <span className='buttons'>Edit</span>
              <span className='buttons' >Delete</span>
              <span className='buttons'>View</span> */}
              <Link to={`/edituser/${item.id}`}>Edit</Link>
              <Link to={`/about`}>About</Link>
              <Link to={'/userinfo'}>User Info</Link>
              <Link to={'/userinfo'}>Delete</Link>
            </td>
          </tr>)
        })}
        
      </table>
      </div>
    </div>
  )
}
// "id": 1,
//     "name": "John",
//     "email": "john@gmail.com",
//     "phone": 1234567890,
//     "address": "USA"