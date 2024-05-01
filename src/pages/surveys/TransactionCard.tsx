import React from 'react'

export default function TransactionCard() {
  return (
    <div className="rounded-md h-18 px-4 items-center outline outline-1 outline-gray-300 mt-2">
      <div className="text-sm text-gray-500">Survey ID: 50639064</div>
      <div className="flex">
        <div className="w-1/4">
          <div className="text-gray-500">Points</div>
          <div className="text-blue-500 font-bold">1</div>
        </div>

        <div className="w-1/4">
          <div className="text-gray-500">Balance</div>
          <div className="text-sm">221</div>
        </div>

        <div className="w-1/4">
          <div className="text-gray-500">Date</div>
          <div className="text-sm">Apr 11, 2024</div>
        </div>

        <div className="w-1/4 flex pl-4 space-x-4">
          <div className="text-gray-500 text-sm tex-semibold">Screenout</div>
          {/* SVG Icon */}
          <svg
            data-v-382ea82b=""
            width="1.25rem"
            height="1.25rem"
            color="#202223"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Path for the SVG icon */}
          </svg>
        </div>
      </div>
    </div>
  )
}
