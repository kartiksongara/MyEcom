import React, { useEffect, useState } from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
// import "./Navebar.css"
const Navebar = ({ setemail, stateup }) => {
  const navigate = useNavigate();
  const [getcarddata, setgetcarddata] = useState([])
  const [data, setdata] = useState({})


  const Logout = (e) => {
    let loggeinuser = JSON.parse(localStorage.getItem("loggedinuser"))
    loggeinuser = {}
    localStorage.setItem("loggedinuser", JSON.stringify(loggeinuser))
    navigate("/")
    setemail("")

  }

  useEffect(() => {
    let local = JSON.parse(localStorage.getItem("cartdata")) || []
    let inf = JSON.parse(localStorage.getItem("loggedinuser"))
    setdata(inf)
    // console.log(data)
    setgetcarddata(local)
  }, [stateup])


  return (
    <>
      <div>


        <nav class=" navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <div>



            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>

            </button>



            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                <li>
                  <Link class="nav-link activ" to={"Profile"}><FaRegUserCircle /></Link>
                </li>

                <li>
                  <Link class="nav-link activ" to={"Profile"} style={{ color: "blue" }}> {data.name}</Link>
                </li>
                <li class="nav-item">
                  <a > <Link class="nav-link active" to={"/Electronics"}>Electronics</Link></a>
                </li>

                <li class="nav-item">
                  <a ><Link class="nav-link active" to={"/Cart"}>Cart</Link></a>
                </li>

              </ul>
              <form class="d-flex">
                <button className='btn btn-outline-success  me-2'><Link to={"/Cart"}><MdOutlineShoppingCart /><sup>{getcarddata.length}</sup> </Link></button>
                <button class="btn btn-outline-success" type="submit" onClick={Logout}>Logout</button>
              </form>
            </div>
          </div>

        </nav>

      </div>

    </>
  )
}

export default Navebar