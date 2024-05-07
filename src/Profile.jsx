import React, { useEffect, useState } from 'react'
import { FaUserAlt } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { SlEye } from "react-icons/sl";
import"./APPCSS.css"

function Profile() {
    const [profile, setprofile] = useState({})

    useEffect(()=>{
        let data=JSON.parse(localStorage.getItem("loggedinuser")) || []
        setprofile(data)

    },[])
  return (
    <>
    <div class='profile'>
    <center >
        <div style={{height:"560px",width:"350px", backgroundColor:"white"}}>
            <div  style={{ background:"rgb(111 75 185)", height:"150px",width:"350px",borderBottomLeftRadius:" 100%",borderBottomRightRadius:" 100%"}}> <br /><br />
                <h3 className=' text-light '>{profile.name}</h3>
                <div style={{ height:"80px",width:"80px",background:"white",borderRadius:"100px",border:"1px solid rgb(111 75 185)"}}><FaUserAlt style={{height:"30px",width:"30px",color:"rgb(111 75 185)"}} className='mt-4'/></div>
                <div style={{marginLeft:"10px", display:"flex"}}><div><CiUser /></div><p className='ms-5'>{profile.name}</p>  </div> <hr />
                <div style={{ marginLeft:"10px",display:"flex"}}><div><CiCalendar /></div><p className='ms-5'>{profile.date}</p>  </div> <hr />
                <div style={{marginLeft:"10px", display:"flex"}}><div><IoIosPhonePortrait/></div><p className='ms-5'>{profile.phone}</p>  </div> <hr />
                <div style={{marginLeft:"10px", display:"flex"}}><div><SlEye  className='ms-1'/></div><p className='ms-5'>{profile.password}</p>  </div> <hr />

            {/* <span><button  style={{backgroundColor:"rgb(111 75 185)",height:"40px",width:"100px",borderRadius:"20px",border:"none"}}>Edit </button></span> */}

            </div>
        </div>
    </center>
    </div>
    
    </>
  )
}

export default Profile