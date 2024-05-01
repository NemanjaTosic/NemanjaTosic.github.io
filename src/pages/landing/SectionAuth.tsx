import Button from 'components/Button'
import { Link } from 'react-router-dom'
import React from 'react'

export default function SectionAuth() {
  return (
    <div className="xl:ml-12 bg-white p-8 rounded-lg shadow-md">
      <div className="bg-primary-100 text-primary-900 flex items-center justify-center p-2 rounded-lg">
        {/* gift icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28"
          fill="none"
          width="24"
          height="24"
          className="text-primary-900"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M23.625 8.75H4.375a.875.875 0 0 0-.875.875v3.5c0 .483.392.875.875.875h19.25a.875.875 0 0 0 .875-.875v-3.5a.875.875 0 0 0-.875-.875ZM22.75 14v7.875a.875.875 0 0 1-.875.875H6.125a.875.875 0 0 1-.875-.875V14M14 8.75v14M18.955 7.514C17.708 8.75 14 8.75 14 8.75s0-3.708 1.236-4.955a2.63 2.63 0 0 1 3.719 3.72ZM9.045 7.514C10.292 8.75 14 8.75 14 8.75s0-3.708-1.236-4.955a2.63 2.63 0 0 0-3.719 3.72Z"
          ></path>
          <path
            fill="currentColor"
            d="M22.75 14v7.875a.875.875 0 0 1-.875.875H6.125a.875.875 0 0 1-.875-.875V14h17.5Z"
            opacity=".2"
          ></path>
        </svg>
        <div className="px-4">
          Sign Up and get up to{' '}
          <span className="font-semibold">$5 FREE BONUS!</span>
        </div>
      </div>
      <div className="text-center pt-4 text-2xl font-semibold">
        Log in or sign up
      </div>
      <div className="pt-4">
        <input
          type="text"
          id="input"
          className="border hover:border-blue-500 border-gray-300 focus:border-blue-500 rounded-md px-4 py-2 w-full mt-4"
          placeholder="Email"
        />
      </div>
      <div className="pt-4">
        <Link to="/surveys">
          <Button text="Continue" onClick={() => {}} />
        </Link>
      </div>
      {/* <div className="pt-4 flex space-x-8">
        <div className="w-1/3">
          <Button text="Google" variant="outline-gray" onClick={() => {}} />
        </div>
      </div> */}
      <div className="border-b-[1px] border-gray-200">&nbsp;</div>
    </div>
  )
}
