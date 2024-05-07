
import React, { useEffect, useState } from 'react'
import Data from './Data'
import { MdOutlineShoppingCart } from "react-icons/md";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import "./Electronics.css"
function Electronics({stateup,setstateup}) {
    const [cartdata, setcartdata] = useState([])
    const [loginuser, setloginuser] = useState()
    const [ALL, setALL] = useState([])
    const navigate=useNavigate()
    const [searchdatahome, setsearchdatahome] = useState([])
    const [test, settest] = useState(false)
    useEffect((e)=>{
        let mycartdata=JSON.parse(localStorage.getItem("cartdata")) ||[]
        let loginuser=JSON.parse(localStorage.getItem("loggedinuser")) ||[]
        setloginuser(loginuser)
        setcartdata(mycartdata)
    },[])
    const addcart=(item,i)=>{
        let gethomedata = JSON.parse(localStorage.getItem("cartdata")) ||[]
        let product={
            id:Math.random(),
            email:loginuser.email,
            item,
            quantity:1
        }
        let index=gethomedata.some((e)=>e.item.id === item.id)
        // console.log(index)
        if(loginuser){
        if(!index){
            let localdata=[...cartdata].concat(product)
            localStorage.setItem("cartdata",JSON.stringify(localdata))
            setcartdata(localdata)
            // Swal.fire({
            //     icon:"success",
            //     title:"Successfully added!",
            //     text:"Item added in your cart"
            // })
            setstateup(stateup + 1)
        }else{
            Swal.fire({
                icon:"error",
                title:"Item in cart",
                text:"Item is already added"
            })
        }
    }else{
        Swal.fire({
            icon:"error",
            title:'Login first',
            text:"Login your id first"
        })
        navigate("/")
    }
    
    }

    const changehandel= (e) => { 
        let search = e.target.value
        let localdata = [...Data]
        let mysearchdata=localdata.filter((e)=>{
            return e.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        })
        setsearchdatahome(mysearchdata)
        settest(true)
    }
    const click5000=(e)=>{
        if(e.target.checked==true){
            let localdata=[...Data]
            let mysearchdata=localdata.filter((e)=>{
                return e.discountprice <=5000
            })
            setsearchdatahome(mysearchdata)
            settest(true)
        }else{
            settest(false)
        }

    }
    const click5to15k=(e)=>{
        if(e.target.checked==true){
            let localdata=[...Data]
            let mysearchdata=localdata.filter((e)=>{
                return e.discountprice >=5000 && e.discountprice <=15000
            })
            setsearchdatahome(mysearchdata)
            settest(true)
        }else{
            settest(false)
        }

    }
    const click15k=(e)=>{
        if(e.target.checked==true){
            let localdata=[...Data]
            let mysearchdata=localdata.filter((e)=>{
                return e.discountprice > 15000
            })
            setsearchdatahome(mysearchdata)
            settest(true)
        }else{
            settest(false)
        }

    }



  return (
  <>
    <center>

    </center>

        <div className='productbox d-flex gap-5 mt-5 flex-wrap justify-content-center'>
            <div className='filterbox d-flex  '>
                <div className='filter'>
                    <div className='down'>
                        <Link className='text'>Filter &#160; &#8744;</Link>
                        <div className='filterin'>
                        <div className='check'><input type="checkbox"  onClick={click5000}/><label htmlFor="">Below 5000</label></div>
                        <div className='check'><input type="checkbox" onClick={click5to15k} /><label htmlFor="">5000 Between 15000</label></div>
                        <div className='check'><input type="checkbox" onClick={click15k} /><label htmlFor="">Above15000</label></div>
                        </div>
                    </div>
                </div>
                <input className='search' type="text" onChange={changehandel} placeholder='Search here'/>
            </div>

            
            {(test? searchdatahome :Data).map((e,i)=>{
                return(
                    <>
                    <div className='pcontent   mt-4 btn btn-success '>
                    <img className='productimg' src={e.image} alt="not" />
                    <h5>{e.name}</h5>
                    <h5>Price : {e.price}</h5> 
                    <h5>Discount : {e.discount}</h5> 
                    <h5>Discount Price : {e.discountprice}</h5>
                    <button  className='bg-warning'style={{width:"80px",borderRadius:"20%"}} onClick={()=>{addcart(e,i)}}><MdOutlineShoppingCart /></button>
                    </div>
                    </>
                )
            })}
        </div>
    </>
  )
}

export default Electronics