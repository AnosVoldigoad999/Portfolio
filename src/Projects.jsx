import { Link } from "react-router-dom"
import {AiFillGithub, AiOutlineMenu} from 'react-icons/ai'
import {RxExternalLink} from 'react-icons/rx'
import { useEffect } from "react"
export default function Projects ({ check, setCheck}){
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
<main className="projectmain">
    <h2>My Portfolio</h2>
    <h5>Feast your eyes upon my creations!</h5>
    <div className="project">
    <a target="_blank" href="https://managelandingpage-ten.vercel.app/" className="imga"><img className="screenshots" alt="port" src="/PICS/manage.png"  /></a>
        <div className="projectdes">
        <h4>Manage Landing page.</h4>
        <p>
            A landing page for <b>Manage</b>, a software product that helps teams plan and track their tasks, goals and progress. It is a front-end development challenge on <b><a target="blank" href="https://frontendmentor.io">Frontend Mentor</a></b>.
        </p>
        <p>
            Built with <a target="_blank" href='https://react.dev/'><b>React</b></a> and <a target="_blank" href='https://en.wikipedia.org/wiki/CSS'><b>CSS</b></a>
        </p>
        <p><b><a target="_blank" href="https://managelandingpage-ten.vercel.app/">Live site<RxExternalLink className="exlink" /></a></b>&nbsp; <b><a target="_blank" href='https://github.com/AnosVoldigoad999/managelandingpage'><AiFillGithub className='github' />Github</a></b></p>
        </div>
    </div>
    <br />
    {/*<div className="project">
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
    </div>*/}
    <br />
    <div className="project">
        <a target="_blank" href="https://e-commerce-page-flame.vercel.app/"><img className="screenshots" alt="ecommerce" src="/PICS/ecommerce.png"   /></a>
        <div className="projectdes">
        <h4>E-commerce product page</h4>
        <p>
            A product page for a potential sneaker company, showcasing the product, offers and providing options for adding and removing items from the cart. It is a front-end development challenge on <b><a target="_blank" href="https://frontendmentor.io">Frontend Mentor</a></b>.
        </p>
        <p>
            Built with <a href='https://react.dev/'><b>React</b></a> and <a href='https://en.wikipedia.org/wiki/CSS'><b>CSS</b></a>
        </p>
        <p><b><a target="_blank" href="https://e-commerce-page-flame.vercel.app/">Live site<RxExternalLink className="exlink" /></a></b>&nbsp; <b><a target="_blank" href='https://github.com/AnosVoldigoad999/E-commercePage'><AiFillGithub className='github' />Github</a></b></p>
        </div>
    </div>
    <br />
    <div className="project">
        <a target="_blank" href="https://uzaymah.vercel.app/" ><img className="screenshots" alt="port" src="/PICS/portfolio.png"  /></a>
        <div className="projectdes">
        <h4>My Portfolio Site</h4>
        <p>
            You're on it....👀
        </p>
        <p>
            Built with <a target="_blank" href='https://react.dev/'><b>React</b></a> and <a target="_blank" href='https://en.wikipedia.org/wiki/CSS'><b>CSS</b></a>
        </p>
        <p><b><a target="_blank" href="https://uzaymah.vercel.app/">Live site<RxExternalLink className="exlink" /></a></b>&nbsp; <b><a target="_blank" href='https://github.com/AnosVoldigoad999/Portfolio'><AiFillGithub className='github' />Github</a></b></p>
        </div>
    </div>
    <br />
    <div className="project">
        <a target="_blank" href="https://advice-generator-three-alpha.vercel.app/"><img className="screenshots" alt="advice" src="/PICS/advice.png"  /></a>
        <div className="projectdes">
        <h4>Random advice generator</h4>
        <p>
            An advice generator that works with the <b><a target="_blank" href="https://api.adviceslip.com/">Advice Slip API</a></b> to generate random quotes of advice. It is a front-end development challenge on <b><a target="blank" href="https://frontendmentor.io">Frontend Mentor</a></b>.
        </p>
        <p>
            Built with <a target="_blank" href='https://react.dev/'><b>React</b></a> and <a target="_blank" href='https://en.wikipedia.org/wiki/CSS'><b>CSS</b></a>
        </p>
        <p><b><a target="_blank" href="https://advice-generator-three-alpha.vercel.app/">Live site<RxExternalLink className="exlink" /></a></b>&nbsp; <b><a target="_blank" href='https://github.com/AnosVoldigoad999/advice-generator'><AiFillGithub className='github' />Github</a></b></p>
        </div>
    </div>
    {/*<br />
    <br />

    <div id="contacts">
        <h4>Let's Connect</h4>
        <p><a href="https://twitter.com/Anos_Voldigoad4"><FaTwitter className="twitter" /></a><a href="mailto:oyedejiuzaymah@gmail.com"><BiLogoGmail className="gmail" /></a><a href="https://www.instagram.com/anosvoldigoad99/"><AiFillInstagram className="instagram" /></a></p>
</div>*/}
</main>
    </>
}