import {CiFaceSmile} from 'react-icons/ci'
import {ImHtmlFive} from 'react-icons/im'
import {SiCss3, SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {AiFillGithub, AiFillInstagram} from 'react-icons/ai'
import { SiFrontendmentor } from "react-icons/si"
import {FaTwitter} from 'react-icons/fa'
import {BiLogoGmail} from 'react-icons/bi'
import { useEffect} from 'react'
export default function Home ({ check, setCheck}){
    useEffect(()=>{
      setCheck(false)
    }, [])
    return <>
    <main id='home' className='main'>
    <div className="des">
      <h1>Front-End React Developer</h1>
      <p>Hi, I'm Uzaymah Oyedeji. A front-end developer based in Nigeria.</p>
      <div className="contacts">
      <a target='blank' href='https://github.com/AnosVoldigoad999'><AiFillGithub className='github' /></a>
      <a target='blank' href="mailto:oyedejiuzaymah@gmail.com"><BiLogoGmail className="gmail" /></a>
      <a target='blank' href="https://twitter.com/Anos_Voldigoad4"><FaTwitter className="twitter" /></a>
      <a target='blank' href="https://www.frontendmentor.io/profile/AnosVoldigoad999"><SiFrontendmentor className="instagram" /></a>
      </div>
      <br />
      <p className='techs'>Tech Stack | <a target='blank' href='https://react.dev/'><FaReact className='react' /></a><a target='blank' href='https://en.wikipedia.org/wiki/HTML'><ImHtmlFive className='html' /></a><a target='blank' href='https://en.wikipedia.org/wiki/CSS'><SiCss3 className='css' /></a><a target='blank' href='https://en.wikipedia.org/wiki/JavaScript'><SiJavascript className='js' /></a></p>
    </div>
    <CiFaceSmile className='person' />
  </main>
    </>
  }