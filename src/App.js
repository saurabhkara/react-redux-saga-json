
import './App.css';
import {Home , About, AddEdit, UserInfo} from './page';
import {BrowserRouter ,Routes, Route,} from 'react-router-dom';
import Header from './component/Header';
import {useSelector, useDispatch} from 'react-redux';
import {loadUserStart} from './redux/action';
import React,{useEffect} from 'react';


function App() {
  const dispatch=useDispatch();
  const selector=useSelector((state)=>state.data);
  // console.log("redux Data",selector)

  useEffect(()=>{
    dispatch(loadUserStart());
  },[])
  return (
    <BrowserRouter>
    <Header />
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/addedit" element={<AddEdit/>} />
        <Route path="/addedit/:id" element={<AddEdit/>} />
        <Route path="/userinfo/ :id"element={<UserInfo/>} />
        <Route path="/userinfo"element={<UserInfo/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
