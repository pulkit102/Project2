import React from 'react'
import Title from '../components/title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div >
      <hr />
      <div className='text-center mt-10'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='flex flex-col sm:flex-row mt-10'>
         <div className='w-full sm:w-1/2'>
          <img src={assets.about_img}  alt="" />
         </div> 
         <div className='w-full sm:w1/2 flex items-center justify-center py-10 sm:py-0 ml-10'>
            <div className='text-[#6D6D6D] space-y-10'>
              <div className='flex items-center gap-2'>
                <p className='font-medium text-sm md:text-base'>EliteBazaar Was Born Out Of A Passion For Innovation And A Desire To Revolutionize The Way
            People Shop Online.Out Journey Began With A Simple Idea: To Provide A Platform Where 
            Customers Can Easily Discover,Explore,And Purchase A Wide Range Of Products From 
            The Comfort Of Their Homes.
                </p>
              </div>
              <div className='flex items-center gap-2 '>
                <p className='font-medium text-sm md:text-base'>
                Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference.
                 From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
                </p>
              </div>
              <div className='flex items-center gap-2'>
                <h4 className='font-bold text-sm md:text-base'>
                OUR MISSION
                </h4>
              </div>
              <div className='flex items-center gap-2'>
                <p className='font-medium text-sm md:text-base'>
                Our mission at EliteBazaar is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping
                 experience that exceeds expectations, from browsing and ordering to delivery and beyond.
                </p>
              </div>
            </div>
         </div>
      </div>

        <div className='mt-10 '>
        <Title text1={'WHY'} text2={'CHOOSE US'} />  
        </div>      

        <div className="container mx-auto p-4 mb-10 mt-10">
      <div className="grid grid-cols-3 gap-4">
        <div className="border rounded-md p-4">
          <h3 className="font-bold text-lg mb-2">Quality Assurance:</h3>
          <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className="border rounded-md p-4">
          <h3 className="font-bold text-lg mb-2">Convenience:</h3>
          <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className="border rounded-md p-4">
          <h3 className="font-bold text-lg mb-2">Exceptional Customer Service:</h3>
          <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>
    </div>
        <NewsLetterBox/>
    </div>
  )
}

export default About

