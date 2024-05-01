import React from 'react'

export default function SectionAbout() {
  const backgroundImageStyle: React.CSSProperties = {
    backgroundImage: 'url("/assets/welcome/model_background.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <div
      className="flex xl:px-48 md:px-12 px-4 pt-12 mt-12 min-h-screen"
      style={backgroundImageStyle}
    >
      <div className="w-1/2 pt-24">
        <div className="text-3xl font-bold">
          <span className="text-primary-500">Lorem Ipsum</span> Ametur
        </div>
        <div className="text-gray pt-12">
          Lorem ipsum dolor sit amet consectetur. Arcu faucibus sed nibh
          faucibus vivamus vitae lorem. Ornare imperdiet convallis et velit at
          ut consectetur sagittis morbi. Turpis quis a montes augue quisque
          varius porttitor mus fusce. Mauris suspendisse dignissim vitae nec
          proin commodo nibh felis enim.
        </div>

        <div className="text-gray pt-8">
          Lorem ipsum dolor sit amet consectetur. Arcu faucibus sed nibh
          faucibus vivamus vitae lorem. Ornare imperdiet convallis et velit at
          ut consectetur sagittis morbi. Turpis quis a montes augue quisque
          varius porttitor mus fusce. Mauris suspendisse dignissim vitae nec
          proin commodo nibh felis enim.
        </div>

        <div className="text-gray pt-12">
          Lorem ipsum dolor sit amet consectetur. Arcu faucibus sed nibh
          faucibus vivamus vitae lorem. Ornare imperdiet convallis et velit at
          ut consectetur sagittis morbi. Turpis quis a montes augue quisque
          varius porttitor mus fusce. Mauris suspendisse dignissim vitae nec
          proin commodo nibh felis enim.
        </div>
      </div>
      <div className="pl-12 w-1/2">
        <img src="/assets/welcome/model.png"></img>
      </div>
    </div>
  )
}
