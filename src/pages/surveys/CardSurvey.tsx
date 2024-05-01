import Rating from 'components/Rating'
import React from 'react'

interface CardSurveyProps {
  minutes: number
  points: number
  value: number
}

export default function CardSurvey({
  minutes,
  points,
  value
}: CardSurveyProps) {
  return (
    <div className="m-4 bg-white cursor-pointer hover:outline hover:outline-1 hover:outline-blue-500/[.30] min-w-80 max-w-80 shadow-md rounded-lg p-4 flex flex-col items-center justify-between">
      <div className="flex justify-between w-full items-center">
        <div className="pr-1 text-md text-gray-500">
          {/* Survey ID */}
          Survey ID: 59323464
        </div>
        <div className="flex items-center space-x-1">
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

          <p className="text-md text-gray-500">{minutes} min</p>
        </div>
      </div>
      <div className="w-full flex">
        <p className="text-2xl text-blue-600 font-bold">{points}&nbsp;</p>
        <p className="text-[12pt] pt-2"> Points</p>
      </div>
      <div className="w-full pt-2 flex items-center">
        <div data-v-a01a7b67="" className="flex">
          {/* Rating component */}
          <Rating />
        </div>
        <div className="text-gray-500 text-sm">&nbsp;({value})</div>
      </div>
    </div>
  )
}
