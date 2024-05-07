import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import "./Singup.css"
const Signup = () => {
    const [ADD, setADD] = useState({})
    const [ALL, setALL] = useState([])
    const [Error, setError] = useState([])
    const navigate = useNavigate();
    const emailvalidation=/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm
    const change = (e) => {
        setADD({ ...ADD, [e.target.name]: e.target.value })
    }
const varify=()=>{
    let localdata=[]
    let valid=true
    if(!ADD.name){
        localdata.name="Name is required";
        valid=false;
    }else if(!ADD.email){
        localdata.email="Email is required";
        valid=false;

    }else if(!emailvalidation.test(ADD.email)){
        localdata.email="this is not valid"
        valid=false
    }else if(!ADD.phone){
        localdata.phone="Phone number is required"
        valid=false
    }else if(!ADD.date){
        localdata.date="not a valid";
        valid=false
    }else if(!ADD.password){
        localdata.password="Password is required"
        valid=false
    }

    setError(localdata)
    console.log(Error.name)
    return(valid)

}

    const click = (e) => {
        e.preventDefault();
        if(varify()){
        let getlocaldata = JSON.parse(localStorage.getItem("user")) || []
        let mylocaldata = getlocaldata.find((e) => e.email === ADD.email)
        if (mylocaldata) {
            Swal.fire({
                icon: "error",
                title: "Enter new email",
                text: "Email is already used "
            })
        } else {
            let newdata = getlocaldata.concat(ADD)
            setALL("newdata")
            localStorage.setItem("user", JSON.stringify(newdata))
            Swal.fire({
                icon: "success",
                title: 'Sign up Successfully!',
                text: 'Login your id now!'
            })
            navigate("/")
        }}


    }
    return (
        < >
          
            <div className='main bg-success '>
                    <center>
                
         <div className='contant h-100'>
         <form action="" className='pt-5' >
                        <label className='label' htmlFor="">Name  : </label> <br />
                        <input className='input' type="text" onChange={change} name='name' /> <br />
                        {Error && <p>{Error.name}</p>}
                        <label className='label' htmlFor="">Email</label> <br />
                        <input className='input' type="email" onChange={change} name='email' /> <br />
                        {Error && <p>{Error.email}</p>}
                        <label className='label' htmlFor="">Phone</label> <br />
                        <input className='input' type="number" onChange={change} name='phone' /> <br />
                        {Error && <p>{Error.phone}</p>}
                        <label className='label' >Dob</label> <br />
                        <input  className='input' type="date" onChange={change} name='date' /> <br />
                        {Error && <p>{Error.date}</p>}
                        <label className='label' htmlFor="">Password</label> <br />
                        <input className='input' type="password" onChange={change} name='password' /> <br /> <br />
                        {Error && <p>{Error.password}</p>}
                        <button className='button' onClick={click}   >Signup</button> <br /> <br />
                        <span  className='span text-light'>Already have an account?</span> <br /> <Link to={"/"}>Singin 	&rarr;</Link>
                    </form>

         </div>

                
                    </center>

            </div>




        </>
    )
}

export default Signup