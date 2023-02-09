import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <Link  to ="/" className="navbar-brand">Blogs</Link>
    <form className="d-flex" role="search">
      <Link to='/login'>Login</Link>
      <Link to= '/register'>Register</Link>
    </form>
  </div>
</nav>
    </div>
  )
}
export default Navbar