import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
      <div>PageNotFound | 404 - ERROR</div>
      <Link to="/">HOME</Link>
    </>
  )
}

export default PageNotFound