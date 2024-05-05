import { Link } from "react-router-dom"
import {AiFillGithub, AiOutlineMenu} from 'react-icons/ai'
import {RxExternalLink} from 'react-icons/rx'
import { useEffect, useState } from "react"
import { projects } from "./projs"
export default function Projects ({ check, setCheck}){
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isAtPageEnd, setIsAtPageEnd] = useState(false)
    useEffect(()=>{
        setCheck(false)
        
      }, [])

      window.addEventListener("scroll", ()=>{
        const pagePosition = window.innerHeight + window.scrollY
        if(pagePosition >= document.body.offsetHeight){
          setIsAtPageEnd(true)
        }
      })
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
<main className="projectmain">
   <h2>My Portfolio</h2>
    {projects.map((project, index)=>{
        return <div className="project" key={index}>
          <a target="_blank" href={project.siteLink} className={project.name}><img className="screenshots" alt={project.name} src={project.imageLink}  /></a>
          <div className="projectdes">
        <h4>{project.name}</h4>
        <p>
            {project.des} It is a front-end development challenge on <b><a target="blank" href="https://frontendmentor.io">Frontend Mentor</a></b>.
        </p>
        <p>
            Built with <a target="_blank" href='https://react.dev/'><b>React</b></a> and <a target="_blank" href='https://en.wikipedia.org/wiki/CSS'><b>CSS</b></a>
        </p>
        <p><b><a target="_blank" href={project.siteLink}>Live site<RxExternalLink className="exlink" /></a></b>&nbsp; <b><a target="_blank" href={project.githubLink}><AiFillGithub className='github' />Github</a></b></p>
        </div>
        </div>
    })}
</main>
<footer>
<a target='blank' href="https://www.frontendmentor.io/profile/AnosVoldigoad999/solutions" style={{opacity:`${isAtPageEnd && 100}`}}>View more</a>
</footer>
    </>
}