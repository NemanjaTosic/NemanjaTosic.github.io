import React from 'react'

export default function SectionSteps() {
  return (
    <div className="text-center 2xl:px-72 xl:px-48 md:px-12 px-4">
      <div className="text-4xl font-semibold">
        <span className="text-primary-500">Lorem Ipsum</span> Ametur
      </div>
      <div className="text-gray pt-8 px-8">
        Lorem ipsum dolor sit amet consectetur. Arcu faucibus sed nibh faucibus
        vivamus vitae lorem. Ornare imperdiet convallis et velit at ut
        consectetur sagittis morbi. Turpis quis a montes augue quisque varius
        porttitor mus fusce. Mauris suspendisse dignissim vitae nec proin
        commodo nibh felis enim.
      </div>
      <div className="flex justify-center items-center pt-12 space-x-12">
        <div className="text-center w-1/3 flex flex-col items-center justify-center">
          <img src="/assets/icons/survey.svg"></img>
          <div className="text-primary-500 pt-2 font-semibold text-xl">
            Take Survey
          </div>
          <div className="text-gray pt-2">
            Lorem ipsum dolor sit amet consectetur. Et morbi neque in eget proin
            enim dignissim dignissim tristique.
          </div>
        </div>

        <div className="text-center w-1/3 flex flex-col items-center justify-center">
          <img src="/assets/icons/reward.svg"></img>
          <div className="text-primary-500 pt-2 font-semibold text-xl">
            Earn Rewards
          </div>
          <div className="text-gray pt-2">
            Lorem ipsum dolor sit amet consectetur. Et morbi neque in eget proin
            enim dignissim dignissim tristique.
          </div>
        </div>

        <div className="text-center w-1/3 flex flex-col items-center justify-center">
          <img src="/assets/icons/paid.svg"></img>
          <div className="text-primary-500 pt-2 font-semibold text-xl">
            Get Paid
          </div>
          <div className="text-gray pt-2">
            Lorem ipsum dolor sit amet consectetur. Et morbi neque in eget proin
            enim dignissim dignissim tristique.
          </div>
        </div>
      </div>
    </div>
  )
}
