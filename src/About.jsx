import { Link } from "react-router-dom"
import { useEffect } from "react"
import {FiDownload} from 'react-icons/fi'
import {AiOutlineMenu} from 'react-icons/ai'
import {motion} from 'framer-motion'
export default function About ({ check, setCheck}){
  useEffect(()=>{
    setCheck(false)
  }, [])
return<>
<motion.div
  initial={{ opacity: 0}}
  whileInView={{ opacity: 1 }}
  transition={{duration:1}}
>
<main className="aboutmain" id="about">

  <motion.div 
  
  transition={{
    ease: "linear",
    duration: 2,
    x: { duration: 1 }
  }}

  className="des">
    <h1>Hello, I'm Uzaymah Adeyemi Oyedeji,</h1>
    <p>
    but you can call me Adeyemi. By day, I'm a frontend React developer passionate about crafting intuitive interfaces. By night, I'm an avid gaming and anime enthusiast with a soft spot for the Straw Hat Pirates. As a software engineering student at Osun State University, I'm dedicated to leveling up my skills. Currently, I'm seeking an internship to gain real-world experience and enhance my resume. Let's connect, collaborate, and build innovative applications together!
    </p>
  </motion.div>
  <img src="/PICS/me-hehe.jpg" alt="" className="person" />
</main>
</motion.div>
    </>
}
