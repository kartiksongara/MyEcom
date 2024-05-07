import React, { useEffect, useState } from 'react'
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { GrSubtract } from "react-icons/gr";
import { Link } from 'react-router-dom';
import "./Electronics.css"
const Cart=({stateup,setstateup})=> {
    const [cartdata, setcartdata] = useState([])
    // const [cart, setcart] = useState([])
    const [loggedindata, setloggedindata] = useState([])
    const [iteminc, setiteminc] = useState(0)
    const [cartdataleg, setcartdataleg] = useState([])

    useEffect(()=>{
        let getcarddata=JSON.parse(localStorage.getItem("cartdata"))
        // let getcard=JSON.parse(localStorage.getItem("cartdata1"))
        let loggeddata=JSON.parse(localStorage.getItem("loggedinuser"))
        setloggedindata(loggeddata.email)
        setcartdata(getcarddata)
        // setcart(getcard)
    },[])
    const incress=(e)=>{
        e.quantity++
        setiteminc(iteminc+1)
        let index=cartdata.findIndex((eq)=>eq.id == e.id)
        if(loggedindata){
            cartdata[index]=e
            localStorage.setItem("cartdata",JSON.stringify([...cartdata]))
        }
    }
    const descress=(e)=>{
        if(e.quantity >1){
            e.quantity--
        }
        setiteminc(iteminc + 1)
        let index =cartdata.findIndex((eq)=>eq.id=== e.id)
        if(loggedindata){
            cartdata[index]=e
            localStorage.setItem("cartdata",JSON.stringify([...cartdata]))
        }

    }

    const itemdelet=(e,i)=>{
        cartdata.splice(i,1)
        localStorage.setItem("cartdata",JSON.stringify([...cartdata]))
        setcartdata([...cartdata])
        setcartdataleg(cartdata.length)
     setstateup(stateup - 1)
    }
    if(cartdata.length ===0 ){
        return(
            <>
            <h1>Add some item</h1>
            <Link className="nav-link active" to={"/Electronics"}>Go to home</Link>
            </>
        )
    }

  return (
    <>
    <div className='productbox d-flex flex-wrap justify-content-center gap-5'>
        {cartdata?.map((e,i)=>{
            return(<>
            <div className='pcontent  btn btn-success '>
                    <img className='productimg' src={e.item.image} alt="not"   />
                    
                    <h5>{e.item.name}</h5>
                    <h5>Price : {e.item.price}</h5>
                    <h5>Discount : {e.item.discount}</h5> 
                    <h5>Discount Price : {e.item.discountprice}</h5>
                     <span className='btn btn-outline-secondary  me-3'><button className='bg-warning' onClick={()=>{itemdelet(e,i)}}><MdOutlineRemoveShoppingCart/></button></span> 
                    <span className='btn' style={{border:"1px solid black"}}>
                    <span><button className='btn btn-outline-info' onClick={()=>{descress(e)}}><GrSubtract/></button></span>
                        <span className='btn rounded-circle text-dark'>{e.quantity}</span>
                        <span><button className='btn btn-outline-info' onClick={()=>{incress(e)}}><IoMdAdd/></button></span>
                    </span>
                    <span> <br />
                    <h5 className='text-dark'>Total : {e.item.price*e.quantity} &#8377;</h5> 

                    </span>
                    </div>
            </>)
        })}



{/* {cart?.map((e,i)=>{
            return(<>
            <div className=' w-25 btn btn-success '>
                    <img src={e.item.url} alt="" width={"360px"} height={"300px"}  />
                    
                    <h5>{e.item.name}</h5>
                    <h5>Price : {e.item.Price}</h5>
                    <h5>Discount : {e.item.descount}</h5>
                     <span className='btn btn-outline-secondary me-3'><button onClick={()=>{itemdelet(e,i)}}><MdOutlineRemoveShoppingCart/></button></span> 
                    <span className='btn' style={{border:"1px solid black"}}>
                    <span><button className='btn btn-outline-info' onClick={()=>{descress(e)}}><GrSubtract/></button></span>
                        <span className='btn rounded-circle text-dark'>{e.quantity}</span>
                        <span><button className='btn btn-outline-info' onClick={()=>{incress(e)}}><IoMdAdd/></button></span>
                    </span>
                    <span> <br />
                    <h5 className='text-dark'>Total : {e.item.price*e.quantity} &#8377;</h5> 

                    </span>
                    </div>
            </>)
        })} */}
    </div>
    </>
  )
}

export default Cart