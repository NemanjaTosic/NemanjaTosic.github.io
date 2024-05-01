import React from 'react'

export default function Footer() {
  const gradientBackground = {
    background: '-webkit-linear-gradient(45deg, #164ED0, #FB89DC)'
  }

  return (
    <>
      <div
        className="flex xl:mx-48 md:mx-12 mx-4 my-12 rounded-[24px] px-16 pt-32"
        style={gradientBackground}
      >
        <div className="w-1/2">
          <div>
            <img src="/assets/logo_white.png" className="h-full w-40" />
          </div>
          <div className="pt-4 pl-4 text-white pr-24 pb-32">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.&nbsp;
            <span className="border-b ">Learn more</span>
          </div>
        </div>
        <div className="w-1/2 pl-56 pt-4 flex flex-col justify-between">
          <div className="text-white text-xl pl-8 font-bold">FOLLOW US</div>
          <div className="flex space-x-8 pb-16">
            <div>
              <img src="assets/icons/facebook.svg"></img>
            </div>
            <div>
              <img src="assets/icons/linkedin.svg"></img>
            </div>
            <div>
              <img src="assets/icons/twitter.svg"></img>
            </div>
            <div>
              <img src="assets/icons/instagram.svg"></img>
            </div>
          </div>
          <div className="flex text-white space-x-8 mb-8">
            <div>Terms of Service</div>
            <div>Privacy Policy</div>
          </div>
        </div>
      </div>
    </>
  )
}
