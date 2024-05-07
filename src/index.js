import React from 'react'
import ReactDom from 'react-dom'
import APP from './APP'
import { BrowserRouter } from 'react-router-dom'
ReactDom.render(

  <>
  <BrowserRouter>
  <APP/>
  </BrowserRouter>
  
  </>
 , document.getElementById("root")
)