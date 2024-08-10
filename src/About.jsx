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
    <h1>Hello, I'm Uzaymah Adeyemi Oyedeji</h1>
    <p>
      A frontend developer with experience in HTML, CSS, JavaScript, and React. I specialize in developing responsive websites for various purposes and can work with any design provided to me. I have worked on several personal projects to hone my skills and stay up-to-date with the latest technologies. I am passionate about creating user-friendly interfaces that enhance the user experience.<br />
Please check out my <a href="#projects"><b>portfolio</b></a> to learn more about me and my work.
    </p>
  </motion.div>
  <img src="/PICS/me-hehe.jpg" alt="" className="person" />
</main>
</motion.div>
    </>
}
