import { Link } from "react-router-dom"
import { useEffect } from "react"
import {AiOutlineMenu} from 'react-icons/ai'
export default function About ({showMenu, setShowMenu}){
  useEffect(()=>{
    setShowMenu(false)
  }, [])
return<>
<nav>
<h1 className='logo'>Uzaymah.dev</h1>
<ul>
<Link className='link' to='/'><li>Home</li></Link>
<Link className='link' to='/about'><li>About</li></Link>
<Link className='link' to='/projects'><li>Projects</li></Link>
</ul>
{ showMenu &&
<div className="mobilemenu">
<ul>
<Link className='link' to='/'><li>Home</li></Link>
<Link className='link' to='/about'><li>About</li></Link>
<Link className='link' to='/projects'><li>Projects</li></Link>
</ul>
</div>
}
<AiOutlineMenu className='menu' onClick={()=>{setShowMenu(!showMenu)}} />
</nav>
<main className="aboutmain">
  <div className="des">
    <h1>Hello, I'm Uzaymah Adeyemi Oyedeji</h1>
    <p>
      A frontend React developer with skills in HTML, CSS, Javascript and React, based in Nigeria. I'm a human (or robot 👀) who enjoys gaming, watching anime or sleeping in his free time. I started my journey 3 months ago and have enjoyed every part of it ever since. <a href="/projects">Here</a> are some of the projects I've built along the way...
    </p>
  </div>
  <img src="/PICS/me-hehe.jpg" alt="" className="person" />
</main>
    </>
}