import './App.css'
import { useState, useEffect } from 'react'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import { FiDownload } from "react-icons/fi";
import {AiOutlineMenu} from "react-icons/ai"
import {Routes, Route, Link} from 'react-router-dom' 

export default function App (){



  const [check, setCheck] = useState(false)
  window.addEventListener("scroll", ()=>{
    setCheck(false)
  })
  return <>
     <nav>
    <h1 className='logo'>Uzaymah.dev</h1>
    <ul>
      <a className='link' href='#home'><li>Home</li></a>
      <a className='link' href='#about'><li>About</li></a>
      <a className='link' href='#projects'><li>Projects</li></a>
      <a className='link' href='https://drive.google.com/file/d/12qduSMUPof-9MVFky5UQ6kbyTERiUG9U/view?usp=drive_link' target='_blank'><li>Resume</li></a>
    </ul>
    <input type='checkbox' id='check' checked={check} />
    <div className='mobilemenu'>
    <ul>
    <a className='link' href='#home'><li>Home</li></a>
      <a className='link' href='#about'><li>About</li></a>
      <a className='link' href='#projects'><li>Projects</li></a>
      <a className='link' href='https://drive.google.com/file/d/12qduSMUPof-9MVFky5UQ6kbyTERiUG9U/view?usp=drive_link' target='_blank'><li>Resume</li></a>
    </ul>
    </div>
    <label htmlFor='check'><AiOutlineMenu className='menu' onClick={()=>{setCheck(!check)}} /></label>
  </nav>
  <main className='mainmain'>
  <Home check={check} setCheck={setCheck} />
  <About check={check} setCheck = {setCheck} />
  <Projects check={check} setCheck={setCheck} />
  </main>
  {/*<Routes>
   <Route path='/' element={<Home check={check} setCheck={setCheck}  />} />
   <Route path='/about' element={<About check={check} setCheck={setCheck} />} />
   <Route path='/projects' element={<Projects check={check} setCheck={setCheck} />} />
  </Routes>*/}
  </>
}
