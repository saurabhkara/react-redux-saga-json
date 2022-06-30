import axios from 'axios';

export const loadUsersAPI= async ()=>{
    
    return await axios.get('http://localhost:3500/users');
}

export const createUserDataAPI= async (user)=>{
    let data= await axios.post(`http://localhost:3500/users`,user)
    return data;
}

export const deleteUserDataAPI=async (id)=>{
    return await axios.delete(`http://localhost:3500/users`, id)
}