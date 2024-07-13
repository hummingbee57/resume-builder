import { Button } from '@/components/ui/button'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
return (
    <div className='flex justify-center items-center h-screen flex-col'>
         <h1 className='text-2xl p-2'>Welcome to Resume_Builder</h1> 
         <p className='text-balance p-2'>fuehreghfoggeaufhgdaufhaoehfouaefheauofhuaeofeahfjelnfiaenflioeanfieoaifona</p>
         <Button className="p-2" onClick={() => navigate("/personal_details")}>Build</Button>
    </div>
)
}

export default Home