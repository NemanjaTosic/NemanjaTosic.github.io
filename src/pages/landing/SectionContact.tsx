import React from 'react'
import SectionAuth from './SectionAuth'
import Button from 'components/Button'

export default function SectionContact() {
  const gradientText = {
    background: '-webkit-linear-gradient(45deg, #FB89DC, #4478DC)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }
  return (
    <div className="flex xl:px-48 md:px-12 px-4 pt-12 mt-12">
      <div className="w-1/2">
        <div className="text-3xl font-bold leading-10">
          Reach out for any questions.
          <br />
          <span style={gradientText}>CONTACT US</span>
        </div>
        <div className="flex pr-12 pt-16 justify-between">
          <input
            type="text"
            id="input"
            className="border-b pt-4 border-gray-300 hover:border-primary-500 hover:opacity-90 focus:outline-none focus:border-primary-500 w-56"
            placeholder="Your Name"
          />
          <input
            type="text"
            id="input"
            className="border-b pt-4 border-gray-300 hover:border-primary-500 hover:opacity-90 focus:outline-none focus:border-primary-500 w-56"
            placeholder="Your Email"
          />
        </div>
        <div className="flex pr-12 pt-8 justify-between">
          <input
            type="text"
            id="input"
            className="border-b pt-4 border-gray-300 hover:border-primary-500 hover:opacity-90 focus:outline-none focus:border-primary-500 w-56"
            placeholder="Phone Number"
          />
          <input
            type="text"
            id="input"
            className="border-b pt-4 border-gray-300 hover:border-primary-500 hover:opacity-90 focus:outline-none focus:border-primary-500 w-56"
            placeholder="Want to know about"
          />
        </div>
        <div className="flex pr-12 pt-8 justify-between">
          <input
            multiple
            type="text"
            className="border-b pt-4 border-gray-300  hover:border-primary-500 hover:opacity-90 focus:outline-none focus:border-primary-500 w-full"
            placeholder="Message"
          />
        </div>
        <div className="pt-12 flex justify-center ">
          <Button
            text="Send"
            style="w-32 rounded-full"
            onClick={() => {}}
          ></Button>
        </div>
      </div>
      <div className="w-1/2">
        <img src="assets/welcome/contact_ad.png"></img>
      </div>
    </div>
  )
}
