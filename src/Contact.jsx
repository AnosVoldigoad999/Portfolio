import { Link } from "react-router-dom"

export default function Contact (){
    return<>
<nav>
  <h1 className='logo'>Uzaymah.dev</h1>
  <ul>
    <Link className='link' to='/'><li>Home</li></Link>
    <Link className='link' to='/about' ><li>About</li></Link>
    <Link className='link' to='/projects'><li>Projects</li></Link>
    <Link className='link' to='/contact'><li>Contact</li></Link>
  </ul>
</nav>
    </>
}