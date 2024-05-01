import React, { useState } from 'react'
import CardSurvey from './CardSurvey'
import Navbar from './Navbar'
import ButtonGroup from 'components/ButtonGroup'
import Button from 'components/Button'
import SectionFAQ from 'pages/landing/SectionFAQ'
import SectionContact from 'pages/landing/SectionContact'
import Footer from 'pages/landing/Footer'

export default function SurveyPage() {
  const [surveyType, setSurveyType] = React.useState(1)
  const gradientText = {
    background: '-webkit-linear-gradient(45deg, #FB89DC, #4478DC)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }
  return (
    <>
      <Navbar />
      <div className="text-center">
        <div className="pt-16 text-xl font-bold">
          <span style={gradientText}> Explore to Earn Rewards</span>
        </div>
        <div className="text-3xl font-bold text-primary-500">Surveys</div>
        <div className="text-gray-500 py-8">
          Lorem ipsum dolor sit amet consectetur. Arcu faucibus sed nibh
          faucibus vivamus vitae lorem.
          <br /> Ornare imperdiet convallis et velit at ut consectetur sagittis
          morbi.
        </div>
        <div className="sticky top-24 z-40 w-full shadow-md backdrop-blur-sm backdrop-opacity-50">
          <div className="py-1 flex items-center justify-center bg-primary-500 space-x-20 ">
            <Button
              variant={surveyType === 1 ? 'white' : 'transparent'}
              onClick={() => {
                setSurveyType(1)
              }}
              style="transition-all duration-200 rounded-full md:h-10 md:w-36"
              text="Best Match"
            ></Button>

            <Button
              variant={surveyType === 2 ? 'white' : 'transparent'}
              onClick={() => {
                setSurveyType(2)
              }}
              style="transition-all duration-200 rounded-full md:h-10 md:w-36"
              text="Short Surveys"
            ></Button>

            <Button
              variant={surveyType === 3 ? 'white' : 'transparent'}
              onClick={() => {
                setSurveyType(3)
              }}
              style="transition-all duration-200 rounded-full md:h-10 md:w-36"
              text="Most Points"
            ></Button>
          </div>
        </div>
        <div className="bg-gray-100 flex justify-center items-center py-16">
          <div className="max-w-[1200px] flex items-center justify-center flex-wrap">
            {Array(30)
              .fill(0)
              .map((item) => (
                <CardSurvey value={200} minutes={30} points={20} />
              ))}
          </div>
        </div>
        <SectionFAQ />
        <SectionContact />
        <Footer />
      </div>
    </>
  )
}
