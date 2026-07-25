import React from 'react'
import gpt from '../assets/gpt.svg'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { UserButton, useClerk, useUser } from '@clerk/react'

const Navbar = () => {
  const navigate = useNavigate()
  const { user } = useUser()
  const { openSignIn } = useClerk()


  return (
    <div className='fixed z-50 w-full backdrop-blur-2xl flex justify-between items-center px-4 py-2 sm:py-3 sm:px-20 xl:px-32'>
      
        <img src={gpt} alt='logo' className='w-16 sm:w-24 cursor-pointer' onClick={() => navigate('/')} />
         {user ? <UserButton /> : <button onClick={openSignIn} className='flex items-center gap-2 rounded-lg text-sm cursor-pointer bg-[#433022] text-white px-10 py-2.5 hover:bg-[#c0a486] hover:text-primary transition-all duration-300 hovertext-[#433022]'>
          Get Started <ArrowRight className='w-4 h-4' />
         
        </button>}
        
      </div>
  )
}

export default Navbar
