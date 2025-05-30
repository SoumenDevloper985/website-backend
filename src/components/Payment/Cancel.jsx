import React from 'react'
import {Link} from "react-router-dom"

const Cancel = () => {
  return (
    <div >
      <div>
        <span >Something went wrong!!</span>
        <span >
          Please retry after sometime
        </span>
        <div>
          <img src="https://i0.wp.com/kashmirreader.com/wp-content/uploads/2020/07/Payment-Failure-1.png?w=810&ssl=1" alt="failed"/>
        </div>
        <div>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}

export default Cancel;
