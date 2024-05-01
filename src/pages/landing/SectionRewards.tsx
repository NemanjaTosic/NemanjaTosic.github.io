import { useState } from 'react'
import CardButtonGroup from 'components/CardButtonGroup'
import GiftCard from 'components/GiftCard'
import Carousel from 'components/Carousel'

export default function SectionRewards() {
  // State to manage the selected button
  const [selectedButton, setSelectedButton] = useState<string>('Surveys')

  // Array of button labels
  const buttons: string[] = ['Surveys', 'Wallet', 'Account']

  // Function to handle button click and update the selected button state
  const handleButtonClick = (button: string) => {
    setSelectedButton(button)
  }
  return (
    <div className="p-8 pt-16 text-center">
      <div className="text-primary-900 font-semibold text-4xl">
        Choose from 100+ rewards
      </div>
      <div className="pt-4 text-gray-500">
        Withdraw cash via PayPal or choose from hundreds of different Gift Cards
      </div>
      <div className="2xl:px-72 pt-12 md:pt-32 flex justify-center xl:px-48 lg:px-12 items-center justify-start flex-wrap ">
        <div>
          <CardButtonGroup />
        </div>
        <div className="hidden lg:pl-12 md:pl-8 lg:block border-r-[1px] h-96 border-gray-200"></div>
        <div className="pt-12 md:pt-0 md:pl-16 lg:pl-32 flex items-center flex-wrap">
          <Carousel />
        </div>
      </div>
    </div>
  )
}
