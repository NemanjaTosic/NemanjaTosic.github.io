import React from 'react'
import CardActivity from './CardActivity'
import Icon from 'components/Icons'
import { useNavigate } from 'react-router-dom'

export default function SurveyActivities() {
  const navigate = useNavigate()
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center py-16">
      <div>
        {/* Main Content Container */}
        <div className="rounded-tl-md rounded-tr-md p-4 min-w-[600px] md bg-white shadow-md">
          <div className="flex items-center pb-4">
            {/* Icon */}
            <div
              onClick={() => {
                navigate(-1)
              }}
              className="transition-colors duration-300 ease-in-out w-12 h-12 flex items-center justify-center rounded-full cursor-pointer mr-4 hover:bg-blue-200/[.70] outline outline-1 outline-blue-300/[.70]"
            >
              <Icon />
            </div>
            <div className="text-xl font-semibold grow text-center pr-12">
              Activities
            </div>
          </div>
          <div className="pt-4 mb-6 border-b-[1px] border-gray-200"></div>
          <div className="px-12">
            <div className="flex items-center text-xl font-semibold">
              Recent Activity
            </div>
            <div className="text-gray-500 text-sm">
              Check the last 10 surveys you took. List does NOT include
              qualifications
            </div>
          </div>
        </div>
        <div className="border-b-2 border-gray-200"></div>

        {/* List of Recent Activities */}
        <div className="rounded-bl-md rounded-br-md p-4 md bg-gray-50 shadow-md">
          {Array(10)
            .fill(0)
            .map((item) => (
              <CardActivity />
            ))}
        </div>
      </div>
    </div>
  )
}
