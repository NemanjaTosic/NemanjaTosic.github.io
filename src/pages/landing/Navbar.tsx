import React, { useState } from 'react'
import Button from 'components/Button'
import { Link } from 'react-router-dom'
import ButtonGroup from 'components/ButtonGroup'
import ClientModal from 'components/Modal/SignUpModal'
import SignUpModal from 'components/Modal/SignUpModal'
import LoginModal from 'components/Modal/LoginModal'

export default function Navbar() {
  const location = window.location.href.split('/')
  // State to manage the selected button
  const [selectedButton, setSelectedButton] = useState<string>(
    location[location.length - 1]
  )

  const buttons = ['About', 'How it works', 'FAQs']
  // Function to handle button click and update the selected button state
  const handleButtonClick = (button: string) => {}

  return (
    <nav className="sticky top-0  z-10 bg-white w-full ">
      <div className="xl:px-48 lg:px-12 md:px-4 md:py-8 py-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo of this page */}
        <div className="flex items-center justify-center md:justify-start md:w-full">
          <Link to="/">
            <img
              src="/assets/logo1.png"
              className="cursor-pointer h-full w-40"
            />
          </Link>
        </div>
        <div>
          {/* Render the ButtonGroup component */}
          <ButtonGroup
            page_url={['/#about', '/#howitworks', '/#faqs']}
            buttons={buttons}
            selectedButton={selectedButton}
            onButtonClick={handleButtonClick}
          />
        </div>
        {/* Login & Signup Button */}
        <div className="flex justify-center md:justify-end md:w-full md:mt-0 mt-8  ml-12">
          <LoginModal buttonName="Login" />
          <div className="pl-4">
            <SignUpModal buttonName="Sign Up" />
          </div>
        </div>
      </div>
      <div className="border-b-[1px] border-gray-200"></div>
    </nav>
  )
}
