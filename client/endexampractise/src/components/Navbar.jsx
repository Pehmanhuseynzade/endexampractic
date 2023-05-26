import React from 'react'
import { Link } from 'react-router-dom'
import "../../src/App.css"
function Navbar() {
  return (
    <>
    <header>
     <nav>
          <div>
               <p>We believe we helps people</p>
               <p>for happier lives</p>
          </div>
          <div>
               <Link><img src="https://preview.colorlib.com/theme/gym/img/logo.png" alt="navimage" /></Link>
          </div>
          <div className='nav-phn' >
               <Link><p style={{color:"black"}}>+880 123 12 658 439</p></Link>
               <Link><button className='navbtn' ><i class="fa-solid fa-phone nav-icon"></i></button></Link>
          </div>
     </nav>
     <div className='link-elements'>
          <ul>
               <Link>
                    <li>HOME</li>
               </Link>
               <Link>
                    <li>ADD</li>
               </Link>
               <Link>
                    <li>TOP COURSE</li>
               </Link>
               <Link>
                    <li>OFFER</li>
               </Link>
               <Link>
                    <li>TRAINER</li>
               </Link>
               <Link>
                    <li>PLAN</li>
               </Link>
               <Link>
                    <li>PAGES</li>
               </Link>
          </ul>
     </div>
    </header>
    </>
  )
}

export default Navbar
