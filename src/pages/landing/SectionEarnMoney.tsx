import React from 'react'

export default function SectionEarnMoney() {
  return (
    <div className="bg-primary-100 pt-12 md:p-16 mt-12 rounded-lg ">
      <div className="text-3xl font-medium xl:px-56 text-center">
        Earn money by taking surveys in{' '}
        <span className="text-primary-900">United States</span>
      </div>
      <div className="text-gray-500 pt-12 text-center xl:px-40 lg:px-32">
        Make money online by taking exciting surveys on Nomadic Insights.
        Withdraw cash or gift cards and receive them immediately
      </div>
      <div className="py-12 md:flex items-start justify-center">
        <div className="md:w-1/3 flex flex-col items-center justify-center">
          <div className="pt-8 px-4">
            <div className="relative">
              <img
                src="/assets/landing/landing_step1_user.svg"
                className="absolute mt-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-12"
                alt="user"
              />
              <img
                src="/assets/landing/landing_step1.svg"
                className="w-96 md:w-72 pt-4"
                alt="Step 1"
              />
            </div>
          </div>
          <div className="flex items-center justify-center mt-8 w-16 h-8 rounded-full outline outline-1 outline-primary-900 text-primary-900">
            Step 1
          </div>
          <div className="pt-2 text-2xl font-semibold">Sign Up</div>
          <div className="pt-1">Sign Up for free</div>
        </div>

        <div className="md:w-1/3 flex flex-col items-center justify-center">
          <div className="pt-8 px-4">
            <div>
              <img
                src="/assets/landing/landing_step2.svg"
                className="w-96 md:w-72 pt-4"
                alt="Step 2"
              />
            </div>
          </div>
          <div className="flex items-center justify-center mt-8 w-16 h-8 rounded-full outline outline-1 outline-primary-900 text-primary-900">
            Step 2
          </div>
          <div className="pt-2 text-2xl font-semibold">Take Surveys</div>
          <div className="pt-1">Select any survey you want</div>
        </div>

        <div className="md:w-1/3 flex flex-col items-center justify-center">
          <div className="pt-8 px-4">
            <div>
              <img
                src="/assets/landing/landing_step3.svg"
                className="w-96 md:w-72 pt-4"
                alt="Step 3"
              />
            </div>
          </div>
          <div className="flex items-center justify-center mt-8 w-16 h-8 rounded-full outline outline-1 outline-primary-900 text-primary-900">
            Step 3
          </div>
          <div className="pt-2 text-2xl font-semibold">Get Paid</div>
          <div className="pt-1 md:px-12 text-center">
            Withdraw cash or redeem from 100+ rewards
          </div>
        </div>
      </div>
    </div>
  )
}
