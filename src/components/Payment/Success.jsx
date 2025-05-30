import React from 'react'

import {Link} from "react-router-dom"

const Success = () => {

  return (
    <div>
      <div>
           <span>Payment successful</span>
           <span >
            Your order is in our system
           </span>
           <div >
            <img src="https://i.stack.imgur.com/YbIni.png" alt="success"/>
           </div>
           <div>
            <Link to="/">
              Back to Home Page
            </Link>
           </div>
      </div>
    </div>
  )
}


export default Success;