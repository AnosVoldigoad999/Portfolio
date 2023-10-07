import { Link } from "react-router-dom"

export default function Projects (){
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
<main className="projectmain">
    <h2>My Portfolio</h2>
    <div className="project">
        <img className="port" alt="port"   />
        <div className="projectdes">
        <h4>My Portfolio Site</h4>
        <p>
            A personal site showing some of my projects, skills and experience to potential clients or employers.
        </p>
        <p>
            Built with <a href='https://react.dev/'><b>React</b></a> and <a href='https://en.wikipedia.org/wiki/CSS'><b>CSS</b></a>
        </p>
        </div>
    </div>
</main>
    </>
}