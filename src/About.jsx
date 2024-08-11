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
    <h1>Hey, I'm Uzaymah Adeyemi Oyedeji</h1>
    <p>
    but Uzaymah works just fine! I'm a frontend React developer by day and a gaming/anime enthusiast by night (don't tell anyone, but I'm secretly a Straw Hat Pirate at heart).
When I'm not building interfaces or searching for One Piece, I'm a software engineering student at Osun State University, trying to level up my skills. Currently, I'm on a quest for an internship to gain some real-world experience and make my resume shine like the Will of D.!
Let's connect, collaborate, and maybe even find the ultimate treasure (or at least build some awesome apps) together!
    </p>
  </motion.div>
  <img src="/PICS/me-hehe.jpg" alt="" className="person" />
</main>
</motion.div>
    </>
}
