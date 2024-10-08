import { Link } from "react-router-dom"
import {AiFillGithub, AiOutlineMenu} from 'react-icons/ai'
import {RxExternalLink} from 'react-icons/rx'
import {FiDownload} from 'react-icons/fi'
import { useEffect, useState } from "react"
import { projects } from "./projs"
import { FaSquareCaretLeft, FaSquareCaretRight } from "react-icons/fa6";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import {motion} from "framer-motion"
export default function Projects ({ check, setCheck}){

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1
    }
  };



  const [scrollPosition, setScrollPosition] = useState(0)
  const [isAtPageEnd, setIsAtPageEnd] = useState(false)
  const [test, setTest] = useState(projects[0])
    /*useEffect(()=>{
        setCheck(false)
        
      }, [])

      window.addEventListener("scroll", ()=>{
        const pagePosition = window.innerHeight + window.scrollY
        if(pagePosition >= document.body.offsetHeight){
          setIsAtPageEnd(true)
        }
      })*/
      const CustomDots = ({index, onClick, active}) =>{
        return<>
        <button onClick={e=>{e.preventDefault()
        onClick();
        }} className={active?"active-dot":"dot"}/>
        </>
      }
    return<>
{/*<nav>
  <h1 className='logo'>Uzaymah.dev</h1>
  <ul>
    <Link className='link' to='/'><li>Home</li></Link>
    <Link className='link' to='/about'><li>About</li></Link>
    <Link className='link' to='/projects'><li>Projects</li></Link>
    <Link to="https://bit.ly/3YC8ySw" className='link'  target='_blank'><FiDownload className='download' />Resume</Link>
  </ul>
  <input type='checkbox' id='check' checked={check} />
  <div className='mobilemenu'>
  <ul>
    <Link className='link' to='/'><li>Home</li></Link>
    <Link className='link' to='/about'><li>About</li></Link>
    <Link className='link' to='/projects'><li>Projects</li></Link>
    <Link to="https://bit.ly/3YC8ySw" className='link' id='mobileLink'  target='_blank'><FiDownload className='download' />Resume</Link>
  </ul>
  </div>
  <label htmlFor='check'><AiOutlineMenu className='menu' onClick={()=>{setCheck(!check)}} /></label>
</nav>*/}
<main className="projectmain" id="projects">
   <h2>Featured Projects</h2>
    {/*{projects.map((project, index)=>{
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
    })}*/}
    <Carousel showDots={true} customDot={<CustomDots />}  removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive} className="caro"  >
    {projects.map((project, index)=>{
        return <motion.div
        initial={{
          scale:0
        }}
        whileInView={{
          scale:1
        }}
       
        transition={{
          ease:"backInOut",
          duration:0.1
        }}
        exit={{
          scale:0
        }}
        className="project" key={index}>
          <img className="screenshots" alt={project.name} src={project.imageLink}  />
          <div className="projectdes">
        <h4>{project.name}</h4>
        <p>
            {project.des}
        </p>
        <p className="builtWith">
          {project.builtWith}
        </p>
        <p className="projectBottomP"><b><a target="_blank" href={project.siteLink}><RxExternalLink className="exlink" /></a></b>&nbsp; <b><a target="_blank" href={project.githubLink}><AiFillGithub className='github' /></a></b></p>
        </div>
        </motion.div>
    })}
        
    </Carousel>
</main>
{/*<footer>
<a target='blank' href="https://www.frontendmentor.io/profile/AnosVoldigoad999/solutions" style={{opacity:`${isAtPageEnd && 100}`}}>View more</a>
  </footer>*/}
    </>
}