import './App.css'
import {CiFaceSmile} from 'react-icons/ci'
import {ImHtmlFive} from 'react-icons/im'
import {SiCss3, SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {AiFillGithub, AiFillInstagram, AiOutlineMenu} from 'react-icons/ai'
import {Routes, Route, Link} from 'react-router-dom' 
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import {FaTwitter} from 'react-icons/fa'
import {BiLogoGmail} from 'react-icons/bi'
import { useState, useEffect } from 'react'
export default function App (){
  const [showMenu, setShowMenu] = useState(false)
  window.addEventListener("scroll", ()=>{
    setShowMenu(false)
  })
  return <>
  <Routes>
   <Route path='/' element={<Home showMenu={showMenu} setShowMenu={setShowMenu} />} />
   <Route path='/about' element={<About showMenu={showMenu} setShowMenu={setShowMenu} />} />
   <Route path='/contact' element={<Contact />} />
   <Route path='/projects' element={<Projects showMenu={showMenu} setShowMenu={setShowMenu} />} />
  </Routes>
  </>
}

function Home ({showMenu, setShowMenu}){
  useEffect(()=>{
    setShowMenu(false)
  }, [])
  return <>
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
  <main className='main'>
  <div className="des">
    <h1>Front-End React Developer</h1>
    <p>Hi, I'm Uzaymah Oyedeji. A front-end developer based in Nigeria.</p>
    <div className="contacts">
    <a target='blank' href='https://github.com/AnosVoldigoad999'><AiFillGithub className='github' /></a>
    <a target='blank' href="mailto:oyedejiuzaymah@gmail.com"><BiLogoGmail className="gmail" /></a>
    <a target='blank' href="https://twitter.com/Anos_Voldigoad4"><FaTwitter className="twitter" /></a>
    <a target='blank' href="https://www.instagram.com/anosvoldigoad99/"><AiFillInstagram className="instagram" /></a>
    </div>
    <br />
    <p className='techs'>Tech Stack | <a target='blank' href='https://react.dev/'><FaReact className='react' /></a><a target='blank' href='https://en.wikipedia.org/wiki/HTML'><ImHtmlFive className='html' /></a><a target='blank' href='https://en.wikipedia.org/wiki/CSS'><SiCss3 className='css' /></a><a target='blank' href='https://en.wikipedia.org/wiki/JavaScript'><SiJavascript className='js' /></a></p>
  </div>
  <CiFaceSmile className='person' />
</main>
  </>
}