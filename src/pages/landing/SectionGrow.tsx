import Button from 'components/Button'
import React from 'react'

export default function SectionGrow() {
  const gradientText = {
    background: '-webkit-linear-gradient(45deg, #B300DC, #4478DC)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }
  return (
    <div>
      <div className="text-center xl:px-48 md:px-12 px-4 pt-24">
        <div>
          <span style={gradientText} className="text-2xl font-bold">
            Don't Settle for Less
          </span>
        </div>
        <div className="pt-4 text-4xl font-semibold">
          <span className="text-primary-500">Grow your income with </span>
          Nomadic
        </div>
        <div className="pt-4 text-gray px-32">
          Lorem ipsum dolor sit amet consectetur. Arcu faucibus sed nibh
          faucibus vivamus vitae lorem. Ornare imperdiet convallis et velit at
          ut consectetur sagittis morbi. Turpis quis a montes augue quisque
          varius porttitor mus fusce. Mauris suspendisse dignissim vitae nec
          proin commodo nibh felis enim.
        </div>
        <div className="pt-24 flex space-x-24 justify-center">
          <div className="outline w-80 outline-1 outline-bg-gray text-center outline-gray-300 rounded-md p-8">
            <div className="text-xl text-primary-500 font-bold">
              Paid Surveys
            </div>
            <div className="text-gray pt-4">
              24/7 medication services are available, including routine daily
              deliveries to ensure optimal health. Our on-site consultant
              pharmacists conduct monthly medication reviews to support your
              needs ffectively.
            </div>
          </div>

          <div className="outline w-80 outline-1 outline-bg-gray text-center outline-gray-300 rounded-md p-8">
            <div className="text-xl text-primary-500 font-bold">
              Learn to Earn
            </div>
            <div className="text-gray pt-4">
              24/7 medication services are available, including routine daily
              deliveries to ensure optimal health. Our on-site consultant
              pharmacists conduct monthly medication reviews to support your
              needs ffectively.
            </div>
          </div>

          <div className="outline w-80 outline-1 outline-bg-gray text-center outline-gray-300 rounded-md p-8">
            <div className="text-xl text-primary-500 font-bold">
              Remote Jobs
            </div>
            <div className="text-gray pt-4">
              24/7 medication services are available, including routine daily
              deliveries to ensure optimal health. Our on-site consultant
              pharmacists conduct monthly medication reviews to support your
              needs ffectively.
            </div>
          </div>
        </div>
        <div className="pt-32">
          <div className="text-3xl font-bold">
            Make a difference&nbsp;
            <span className="text-primary-500">as consumer</span>
          </div>
          <div className="pt-4 text-gray">
            Lorem ipsum dolor sit amet consectetur. Arcu faucibus sed nibh
            faucibus vivamus vitae lorem.
          </div>
          <div className="pt-4 flex items-center justify-center">
            <Button
              text="Take Survey"
              style="rounded-full w-36 h-12"
              onClick={() => {}}
            ></Button>
          </div>
        </div>
      </div>
      <div className="outline outline-primary-500 mt-12 outline-8"></div>
    </div>
  )
}
