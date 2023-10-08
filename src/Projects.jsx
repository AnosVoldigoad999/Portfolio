import { Link } from "react-router-dom"
import {AiFillGithub, AiFillInstagram} from 'react-icons/ai'
import {RxExternalLink} from 'react-icons/rx'
import {FaTwitter} from 'react-icons/fa'
import {BiLogoGmail} from 'react-icons/bi'
export default function Projects (){
    return<>
<nav>
  <h1 className='logo'>Uzaymah.dev</h1>
  <ul>
    <Link className='link' to='/'><li>Home</li></Link>
    <Link className='link' to='/about' ><li>About</li></Link>
    <Link className='link' to='/projects'><li>Projects</li></Link>
    <a className='link' href='#contacts'><li>Contact</li></a>
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
        <img className="advice" alt="advice"   />
        <div className="projectdes">
        <h4>Random advice generator</h4>
        <p>
            An advice generator that works with the <b><a href="https://api.adviceslip.com/">Advice Slip API</a></b> to generate random quotes of advice
        </p>
        <p>
            Built with <a href='https://react.dev/'><b>React</b></a> and <a href='https://en.wikipedia.org/wiki/CSS'><b>CSS</b></a>
        </p>
        <p><b><a href="https://advice-generator-three-alpha.vercel.app/">Live site<RxExternalLink className="exlink" /></a></b>&nbsp; <b><a href='https://github.com/AnosVoldigoad999/advice-generator'><AiFillGithub className='github' />Github</a></b></p>
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
    <br />
    <div id="contacts">
        <h4>Let's Connect</h4>
        <p><a href="https://twitter.com/Anos_Voldigoad4"><FaTwitter className="twitter" /></a><a href="mailto:oyedejiuzaymah@gmail.com"><BiLogoGmail className="gmail" /></a><a href="https://www.instagram.com/anosvoldigoad99/"><AiFillInstagram className="instagram" /></a></p>
    </div>
</main>
    </>
}