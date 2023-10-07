import { Link } from "react-router-dom"
import {AiFillGithub} from 'react-icons/ai'
import {RxExternalLink} from 'react-icons/rx'
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
        <p><b><a href="https://uzaymah.vercel.app/">Live site<RxExternalLink className="exlink" /></a></b>&nbsp; <b><a href='https://github.com/AnosVoldigoad999/Portfolio'><AiFillGithub className='github' />Github</a></b></p>
        </div>
    </div>
    <br />
    <div className="project">
        <img className="intro" alt="intro"   />
        <div className="projectdes">
        <h4>Intro component with sign-up form</h4>
        <p>
            A responsive landing page with a sign-up form for a potential paid service.
        </p>
        <p>
            Built with <a href='https://react.dev/'><b>React</b></a> and <a href='https://en.wikipedia.org/wiki/CSS'><b>CSS</b></a>
        </p>
        <p><b><a href="https://intro-component-sable.vercel.app/">Live site<RxExternalLink className="exlink" /></a></b>&nbsp; <b><a href='https://github.com/AnosVoldigoad999/intro-component'><AiFillGithub className='github' />Github</a></b></p>
        </div>
    </div>
    <br />
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
        <p><b><a href="https://uzaymah.vercel.app/">Live site<RxExternalLink className="exlink" /></a></b>&nbsp; <b><a href='https://github.com/AnosVoldigoad999/Portfolio'><AiFillGithub className='github' />Github</a></b></p>
        </div>
    </div>
    <br />
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
        <p><b><a href="https://uzaymah.vercel.app/">Live site<RxExternalLink className="exlink" /></a></b>&nbsp; <b><a href='https://github.com/AnosVoldigoad999/Portfolio'><AiFillGithub className='github' />Github</a></b></p>
        </div>
    </div>
    <br />
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
        <p><b><a href="https://uzaymah.vercel.app/">Live site<RxExternalLink className="exlink" /></a></b>&nbsp; <b><a href='https://github.com/AnosVoldigoad999/Portfolio'><AiFillGithub className='github' />Github</a></b></p>
        </div>
    </div>
</main>
    </>
}