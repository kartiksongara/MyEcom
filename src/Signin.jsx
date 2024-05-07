import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import"./APPCSS.css"
function Signin({setemail}) {
    const [ADD, setADD] = useState({})
    const [Error, setError] = useState([])
    const emailvalidation=/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm
    const navigate=useNavigate();
    const change=(e)=>{
        setADD({...ADD,[e.target.name]:e.target.value})
    }
    const varify=()=>{
        let localdata=[]
        let valid=true;
        if(!ADD.name){
            localdata.name="Name is required"
            valid=false
        }else if(!ADD.email){
            localdata.email="Email is required"
            valid=false

        }else if(!emailvalidation.test(ADD.email)){
            localdata.email="Email is not valid"
            valid=false
        }else if(!ADD.password){
            localdata.password="Password is required"
            valid=false
        }
//         else if(ADD.password.length >0 && ADD.password.length <=5){
// localdata.password="5 charecter is required"
// valid=false

//         }
        setError(localdata)
        return(valid)
    }
    const click=(e)=>{
        e.preventDefault();
        if(varify()){
        let localdata=JSON.parse(localStorage.getItem("user")) ||[]
        let getmydata=localdata.find((e)=>e.email===ADD.email)
        let index= localdata.findIndex((ele)=>ele.email === ADD.email)
        if(getmydata){
            localStorage.setItem("loggedinuser",JSON.stringify(localdata[index]))
            Swal.fire({
                icon:"success",
                title:"Login Successfull",
                text:"welcome back"
            })
            navigate("/Electronics")
            setemail(ADD.email)
        }else{
            Swal.fire({
                icon:"error",
                title:"Login faild",
                text:"Invalid username and  password"
            })
        }}

    }
  return (
    <>
<div class='singin bg-success'>
     <center className='center'> 
        <form action="" className='text-light'>
            <label htmlFor="" className='text-light label mt-5'>Name</label> <br />
            <input className=' input' type="text" onChange={change} name='name' /> <br />
            {Error && <p>{Error.name}</p>}
            <label className='text-light label' htmlFor="">Email</label> <br />
            <input className=' input' type="email"  onChange={change} name='email'/> <br />
            {Error && <p>{Error.email}</p>}

            <label className='text-light label' htmlFor="">Password</label> <br />
            <input className=' input' type="password" onChange={change} name='password' /> <br /> <br />
            {Error && <p>{Error.password}</p>}

            <button className='button' onClick={click} >Signin</button>  <br /> <br />
            <span className='span'>Create an accont </span>
            <Link to={"/Signup"}> Signup &rarr;</Link>
        </form>
        
    </center>
    </div>
        </>

  )
}

export default Signin