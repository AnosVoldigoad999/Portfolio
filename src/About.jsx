import { Link } from "react-router-dom"
import { useEffect } from "react"
import {AiOutlineMenu} from 'react-icons/ai'
export default function About ({ check, setCheck}){
  useEffect(()=>{
    setCheck(false)
  }, [])
return<>
<nav>
  <h1 className='logo'>Uzaymah.dev</h1>
  <ul>
    <Link className='link' to='/'><li>Home</li></Link>
    <Link className='link' to='/about'><li>About</li></Link>
    <Link className='link' to='/projects'><li>Projects</li></Link>
  </ul>
  <input type='checkbox' id='check' checked={check} />
  <div className='mobilemenu'>
  <ul>
    <Link className='link' to='/'><li>Home</li></Link>
    <Link className='link' to='/about'><li>About</li></Link>
    <Link className='link' to='/projects'><li>Projects</li></Link>
  </ul>
  </div>
  <label htmlFor='check'><AiOutlineMenu className='menu' onClick={()=>{setCheck(!check)}} /></label>
</nav>
<main className="aboutmain">
  <div className="des">
    <h1>Hello, I'm Uzaymah Adeyemi Oyedeji</h1>
    <p>
      I am a frontend developer with experience in HTML, CSS, JavaScript, and React. I specialize in developing responsive websites for various purposes and can work with any design provided to me. I have worked on several personal projects to hone my skills and stay up-to-date with the latest technologies. I am passionate about creating user-friendly interfaces that enhance the user experience.<br />
Please check out my <a href="/projects"><b>portfolio</b></a> to learn more about me and my work.
    </p>
  </div>
  <img src="/PICS/me-hehe.jpg" alt="" className="person" />
</main>
    </>
}
