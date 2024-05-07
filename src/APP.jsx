import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import Signup from './Signup'
import Signin from './Signin'
import Navebar from './Navebar'
import Cart from './Cart'
// import "./Home.css"
import Profile from './Profile'
import Electronics from './Electronics'

const APP = () => {
    const [email, setemail] = useState()
    const [loggeduser, setloggeduser] = useState([])
    const [stateup, setstateup] = useState(0)
    useEffect(() => {
        let loggeddata = JSON.parse(localStorage.getItem("loggedinuser")) || []
        setloggeduser(loggeddata)
    }, [email])
    return (<>
        <div>
            {loggeduser.email && <Navebar setemail={setemail} stateup={stateup} />}
            <Routes>

                <Route path='/' element={<Signin setemail={setemail} />} />
                <Route path='/Signup' element={<Signup />} />
                <Route path='/Electronics' element={<Electronics setstateup={setstateup} stateup={stateup} />}/>

                <Route path='/Cart' element={<Cart setstateup={setstateup} stateup={stateup} />} />
                <Route path='/Profile' element={<Profile/>} />




            </Routes>
        </div>
    </>
    )
}

export default APP