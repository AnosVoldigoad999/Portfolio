import './App.css'
import {CiFaceSmile} from 'react-icons/ci'
import {ImHtmlFive} from 'react-icons/im'
import {SiCss3, SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {Routes, Route, Link, Router} from 'react-router-dom' 
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
export default function App (){
  return <>
  <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/about' element={<About />} />
   <Route path='/contact' element={<Contact />} />
   <Route path='/projects' element={<Projects />} />
  </Routes>
  </>
}

function Home (){
  return <>
  <nav>
  <h1 className='logo'>Uzaymah.dev</h1>
  <ul>
    <Link className='link' to='/'><li>Home</li></Link>
    <Link className='link' to='/about'><li>About</li></Link>
    <Link className='link' to='/projects'><li>Projects</li></Link>
    <Link className='link' to='/contact'><li>Contact</li></Link>
  </ul>
</nav>
  <main className='main'>
  <div className="des">
    <h1>Front-End React Developer</h1>
    <p>Hi, I'm Uzaymah Oyedeji. A front-end developer based in Nigeria.</p>
    <a href='https://github.com/AnosVoldigoad999'><AiFillGithub className='github' /></a>
    <br />
    <p>Tech Stack | <a href='https://react.dev/'><FaReact className='react' /></a><a href='https://en.wikipedia.org/wiki/HTML'><ImHtmlFive className='html' /></a><a href='https://en.wikipedia.org/wiki/CSS'><SiCss3 className='css' /></a><a href='https://en.wikipedia.org/wiki/JavaScript'><SiJavascript className='js' /></a></p>
  </div>
  <CiFaceSmile className='person' />
</main>
  </>
}