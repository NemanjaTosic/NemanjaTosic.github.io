import { useState } from 'react'
import ButtonGroup from 'components/ButtonGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const location = window.location.href.split('/')
  // State to manage the selected button
  const [selectedButton, setSelectedButton] = useState<string>(
    location[location.length - 1]
  )

  // Array of button labels
  const buttons: string[] = ['Surveys', 'Wallet', 'Account', 'FAQs']

  // Function to handle button click and update the selected button state
  const handleButtonClick = (button: string) => {
    setSelectedButton(button)
  }

  return (
    <nav className="sticky top-0  z-10 bg-white w-full">
      <div className="xl:px-48 lg:px-12 md:px-4 md:py-8 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="order-[1]">
          <img src="/assets/logo1.png" className="h-10 w-auto" alt="Logo" />
        </div>

        <div className="flex items-center order-[3]">
          <div className="rounded-full h-8 hover:bg-gray-100 cursor-pointer flex items-center space-x-2 mr-2">
            {/* Icon */}
            <svg
              width="24px"
              height="24px"
              color="#202223"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M3.75 18C3.75 18.3978 3.90804 18.7794 4.18934 19.0607C4.47064 19.342 4.85218 19.5 5.25 19.5H20.25C20.4489 19.5 20.6397 19.421 20.7803 19.2803C20.921 19.1397 21 18.9489 21 18.75V8.25C21 8.05109 20.921 7.86032 20.7803 7.71967C20.6397 7.57902 20.4489 7.5 20.25 7.5H5.25C4.85218 7.5 4.47064 7.34196 4.18934 7.06066C3.90804 6.77936 3.75 6.39782 3.75 6V18Z"
                fill="currentColor"
              ></path>
              <path
                d="M3.75 6V18C3.75 18.3978 3.90804 18.7794 4.18934 19.0607C4.47064 19.342 4.85218 19.5 5.25 19.5H20.25C20.4489 19.5 20.6397 19.421 20.7803 19.2803C20.921 19.1397 21 18.9489 21 18.75V8.25C21 8.05109 20.921 7.86032 20.7803 7.71967C20.6397 7.57902 20.4489 7.5 20.25 7.5H5.25C4.85218 7.5 4.47064 7.34196 4.18934 7.06066C3.90804 6.77936 3.75 6.39782 3.75 6ZM3.75 6C3.75 5.60218 3.90804 5.22064 4.18934 4.93934C4.47064 4.65804 4.85218 4.5 5.25 4.5H18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M16.875 14.625C17.4963 14.625 18 14.1213 18 13.5C18 12.8787 17.4963 12.375 16.875 12.375C16.2537 12.375 15.75 12.8787 15.75 13.5C15.75 14.1213 16.2537 14.625 16.875 14.625Z"
                fill="currentColor"
              ></path>
            </svg>
            <div>220 points</div>
          </div>
          <div className="h-[32px] outline outline-1 outline-gray-200"></div>
          <div className="w-10 h-10 hover:bg-blue-200 shadow-md mr-8  ml-2 flex bg-gray-100 outline-blue-200 cursor-pointer rounded-full items-center justify-center">
            <FontAwesomeIcon
              style={{ color: 'blue', fontSize: '14pt' }}
              icon={faUser}
            />
          </div>
        </div>

        <div className="order-[2]">
          {/* Render the ButtonGroup component */}
          <ButtonGroup
            page_url={['/Surveys', '/Wallet', '/Account']}
            buttons={buttons}
            selectedButton={selectedButton}
            onButtonClick={handleButtonClick}
          />
        </div>
      </div>
    </nav>
  )
}
