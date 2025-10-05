"use client"
import  next  from 'next'
import { motion } from 'framer-motion'



const page = () => {
  return (
    <div>
        <motion.div className="nav" 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.ul className='flex justify-center space-x-50 p-4 bg-gray-800 text-white'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            
          >
            <motion.li whileHover={{scale : 0.5}}>Home</motion.li>
            <motion.li whileHover={{scale : 0.5}}>About</motion.li>
            <motion.li whileHover={{scale : 0.5}}>Projects</motion.li>
            <motion.li whileHover={{scale : 0.5}}>Contact</motion.li>
          </motion.ul>
          <motion.h1 className='text-4xl font-bold text-center mt-70'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to My Portfolio
          </motion.h1>
          <motion.p className='text-center mt-4 text-lg' 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I'm a web developer specializing in creating beautiful and functional websites.
          </motion.p>
          <motion.div className='text-center mt-6'  
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.button className='bg-blue-500 text-white px-4 py-2 rounded mr-2'
              whileHover={{ scale: 1.05 }}
            >
              View Projects</motion.button>
            <motion.button className='bg-gray-500 text-white px-4 py-2 rounded'
            whileHover={{ scale: 1.05 }}>Contact Me</motion.button>

            
          </motion.div>
        </motion.div>
    </div>
  )
}

export default page

