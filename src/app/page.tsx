"use client"
import  next  from 'next'
import { motion } from 'framer-motion'



const page = () => {
  return (
    <div>
    <motion.div className = "box"
    animate =  {{
      x :  1200
    }}
    transition = {{
      duration : 2,
      delay : 1
    }}
    >
      
    </motion.div>
    <motion.div className = "circle"
    animate =  {{
      x :  1200
    }}
    transition = {{
      duration : 2,
      delay : 1
    }}
    >
      
    </motion.div>
    </div>
  )
}

export default page

