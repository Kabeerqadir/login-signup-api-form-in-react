import React from 'react'
import { Link } from 'react-router-dom'

function Permisiondenied() {
  return (
    <>
    <div className='text-center text-danger display-1 '>Permision denied</div>
    <h3 className='text-center'>Please go to <Link to="/">sign up</Link></h3>
    </>
  )
}

export default Permisiondenied