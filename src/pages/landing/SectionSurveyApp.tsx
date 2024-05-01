import React from 'react'

export default function SectionSurveyApp() {
  return (
    <div className="2xl:px-72 xl:px-48 md:px-12 px-2 md:py-16">
      <div className="text-4xl text-center text-primary-900 font-semibold">
        Online Survey App with Low Minimum Payout
      </div>
      <div className="pt-8  text-center text-gray-500">
        Imagine an opportunity to earn every time you fill out a survey online!
      </div>
      <div className="pt-8 md:flex items-center md:space-x-12">
        <img
          src="/assets/landing/minimum-payout.svg"
          className="2xl:w-3/7 lg:w-96 md:w-72 lg:px-12 md:px-0 px-12"
        ></img>
        <div>
          <div className="md:pt-0 pt-8 lg:text-3xl md:text-left text-center text-primary-900 text-2xl font-bold">
            Here at Nomadic Insights, we take your rewards seriously.
          </div>
          <div className="pt-8 md:text-left text-center text-gray-500">
            That's why we have a low minimum payout that you can reach on the
            same day. We give you complete control of the rewards you receive.
          </div>
          <div className="mt-8 p-2 space-x-2 rounded-full bg-primary-100 text-primary-900 flex items-center ">
            {/* $ icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 28"
              fill="none"
              className="text-primary-500 w-8"
            >
              <path
                fill="currentColor"
                d="M14 24.5c5.799 0 10.5-4.701 10.5-10.5S19.799 3.5 14 3.5 3.5 8.201 3.5 14 8.201 24.5 14 24.5Z"
                opacity=".2"
              ></path>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M14 7.875v1.75M14 18.375v1.75M14 24.5c5.799 0 10.5-4.701 10.5-10.5S19.799 3.5 14 3.5 3.5 8.201 3.5 14 8.201 24.5 14 24.5Z"
              ></path>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M11.375 18.375h3.938a2.188 2.188 0 0 0 0-4.375h-2.626a2.188 2.188 0 0 1 0-4.375h3.938"
              ></path>
            </svg>
            <div>
              Average survey-taker needs just 17 minutes to get rewarded!
            </div>
          </div>
          <div className="pt-12">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 flex items-center justify-center text-2xl rounded-full bg-primary-900 text-white">
                1
              </div>
              <div className="w-5/6">
                <div className="text-xl font-semibold">
                  Firstly, make an account, then select the online paid surveys
                  that interest you.
                </div>
                <div className="text-gray-500 pt-2">
                  There are hundreds of surveys to choose from, from playing
                  games, sharing your purchasing habits and even discussing your
                  favorite sports teams.
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-12">
              <div className="w-10 h-10 flex items-center justify-center text-2xl rounded-full bg-primary-900 text-white">
                2
              </div>
              <div className="w-5/6">
                <div className="text-xl font-semibold">
                  Then, every time you complete a survey, you’re rewarded with
                  our points.
                </div>
                <div className="text-gray-500 pt-2">
                  Head over to the rewards and redeem your points for cash or
                  gift cards!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
