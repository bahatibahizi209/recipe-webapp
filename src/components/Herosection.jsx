import React from 'react'
import herobanner   from '../../src/assets/herobanner3.jpg'
export default function Herosection() {
  return (
    <div className="container mx-auto px-4 py-4">
        <div className="px-4 py-20 flex flex-col items-center text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-5xl font-semibold text-primary mb-6">
            Healthy meals,zero fuss</h1>
            <p className="text-sm sm:text-xl text-gray-600 mb-10 max-2-2 leading-relaxed">
            Discover eight quick, whole-food recipes that you can cook tonight no guesswork.simple,delicious and healthy.
            </p>
            <button className="bg-primary text-light-neutral-0 px-10 py-4 rounded-2xl text-lg
            sm:text-l font-semibold hover:bg-secondary transition-all duration-300 transform hover:scale-105
            shadow-xl hover:shadow-2xl hover:cursor-pointer">
            Start exploring
            </button>
            <div className='mt-16 w-full'>
    <img src={herobanner} 
    alt="Hero Image" className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105
    transition-all duration-300 border-white border-8"
    />
</div>
        </div>
      
    </div>
  )
}
