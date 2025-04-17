import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles/styles'
import { ComputersCanvas } from './canvas'  

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Anshuman</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I craft smooth and engaging experiences <br /> that leave a lasting impression.</p>
        </div>

      </div>
      <div className='w-full h-[100%] flex justify-center items-center mx-auto absolute top-[350px]  '>
        <ComputersCanvas />
      </div>

      <div>
        
      </div>

        

      

    </section>
  )
}

export default Hero