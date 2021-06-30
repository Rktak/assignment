import React from 'react'
const Nav = () => {
    return (
        <div >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto ">
          <li className="nav-item active text-warning">
           <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item text-warning">
            <a className="nav-link" href="#">About</a>
          </li>
         
      <li className="nav-item text-warning">
        <a className="nav-link" href="#">Contact</a>
      </li>
      
      
    </ul>
    
  </div>
</nav>
</div>
    );
}

export default Nav