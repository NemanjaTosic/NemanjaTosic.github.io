import React from 'react'
import CardPreference from './CardPreference'
import Icon from 'components/Icons'
import { useNavigate } from 'react-router-dom'

export default function EmailPreference() {
  const navigate = useNavigate()
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center py-16">
      <div>
        <div className="mx-8 rounded-tl-md rounded-tr-md p-4 md:min-w-[600px] md bg-white shadow-md">
          <div className="flex items-center pb-4">
            <div
              onClick={() => {
                navigate(-1)
              }}
              className="transition-colors duration-300 ease-in-out w-12 h-12 flex
             items-center justify-center rounded-full cursor-pointer mr-4 hover:bg-blue-200/[.70] outline outline-1 outline-blue-300/[.70]"
            >
              {/* < Icon */}
              <Icon />
            </div>
            <div className="text-xl font-semibold grow pr-12 text-center">
              E-mail Preferences
            </div>
          </div>
          <div className="pt-4 mb-6 border-b-[1px] border-gray-200"></div>
          <div className="px-8">
            <div className="flex items-center text-sm font-semibold pb-2">
              Deactivate emails you would like to unsubscribe from
            </div>
            {Array(5)
              .fill(0)
              .map((item, index) => (
                <>
                  <CardPreference />
                  {index !== 4 && (
                    <div className="pt-8 mb-6 border-b-[1px] border-gray-200"></div>
                  )}
                </>
              ))}
            <div
              className="mt-4 cursor-pointer transition duration-200 text-white 
            p-2 bg-gradient-to-r from-blue-600 from-30%  to-pink-600 to-70%  shadow-md hover:from-blue-600 hover:from-40%  hover:to-pink-600 hover:to-80% rounded-lg"
            >
              <div className="text-md font-semibold text-center">
                Update Preferences
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
