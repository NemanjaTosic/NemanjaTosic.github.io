import React from 'react'
import SectionEarnMoney from './SectionEarnMoney'
import SectionAuth from './SectionAuth'
import Button from 'components/Button'

export default function SectionAd() {
  const gradientText = {
    background: '-webkit-linear-gradient(45deg, #FB89DC, #4478DC)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }
  return (
    <div
      id="about"
      className="2xl:px-72 xl:px-48 md:px-12 px-4 py-16 md:pt-20  bg-cover bg-center"
    >
      <div>
        <div className="lg:flex lg:flex-row md:flex-col lg:items-center ">
          <div className="lg:w-3/6">
            <div className="text-3xl 2xl:text-5xl md:text-4xl font-bold 2xl:leading-tight 2xl:tracking-wide">
              Earn anywhere,
              <br />
              Any time with
              <br />
              <span style={gradientText}>NOMADIC</span>
            </div>
            <div className="pt-4 2xl:text-2xl md:text-[16pt]">
              Your opinions are valuable, and businesses are willing to pay for
              them. Earn cash today!
            </div>
            <div className="pt-12 flex lg:justify-start lg:pl-0 md:pl-36 ">
              <Button
                text="Join Now"
                style="w-48 rounded-full"
                onClick={() => {}}
              ></Button>
            </div>
          </div>
          <div className="lg:w-3/6 flex items-center justify-center">
            <div>
              <img src="/assets/welcome/circle.png" className="max-w-xl"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
