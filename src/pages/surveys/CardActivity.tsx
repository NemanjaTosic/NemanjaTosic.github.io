import React from 'react'

export default function CardActivity() {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg  mb-4">
      <div className="flex items-center">
        <div>
          {/* clock icon */}
          <svg
            data-v-225c2e13=""
            width="20px"
            height="20px"
            color="#164ed0"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M10 5.625V10H14.375"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>

        <div className="flex w-full items-center justify-between">
          <div className="pl-2 text-sm text-gray-500">
            {/* Date and time */}
            April 11, 2024 (1 min)
          </div>
          <div className="px-4 py-1 rounded-full text-[10pt] text-blue-600 bg-blue-200  font-bold">
            {/* Status */}
            COMPLETED
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="text-xl text-blue-500 font-bold">20</div>
        <div className="pl-1 pt-2 text-sm">
          {/* Points */}
          Points Paid
        </div>
      </div>
    </div>
  )
}
