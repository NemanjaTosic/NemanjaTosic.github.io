import { useState } from 'react'
import Button from './Button'
import Icons from './Icons'

const slides = [
  { url: '/assets/giftcards/paypal.svg', card: 'PayPal USA', min: 5, max: 100 },
  { url: '/assets/giftcards/venmo.svg', card: 'venmo', min: 1, max: 100 },
  { url: '/assets/giftcards/ACH_bank.png', card: 'ACH', min: 2, max: 100 },
  { url: '/assets/giftcards/Revolut.svg', card: 'Revolut', min: 1, max: 100 }
]

const Carousel = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-5 ">
      <div className="group relative w-full max-w-7xl aspect-video flex flex-col items-center justify-center">
        <div className="rounded-md outline outline-1  outline-gray-200 w-80 h-80 overflow-hidden inline-flex bg-cover bg-center">
          {slides.map((item, index) => (
            <div
              className={`flex flex-col items-center justify-center bg-cover w-full h-full min-w-full object-cover 
              object-center transition-transform ease-out duration-500`}
              style={{
                backgroundImage: "url('/assets/giftcards/bg-giftcard.svg')",
                transform: `translateX(${-currentSlideIndex * 100}%)`
              }}
            >
              <div className="font-semibold text-2xl">{`$${item.min} - $${item.max}`}</div>
              <div className="pt-2">{item.card}</div>
              <img src={`${item.url}`} className="pt-4 w-20"></img>
            </div>
          ))}
        </div>
        <Button className="left-5" onClick={prevSlide}>
          <Icons.ChevronLeft width={20} height={20} />
        </Button>

        <Button className="right-5" onClick={nextSlide}>
          <Icons.ChevronRight width={20} height={20} />
        </Button>
      </div>
      <div className="flex items-center gap-4">
        {slides.map((_, index) => (
          <div
            key={'dot-' + index}
            onClick={() => setCurrentSlideIndex(index)}
            className={`h-4 w-4 rounded-full transition-colors duration-200 cursor-pointer ${
              currentSlideIndex === index ? 'bg-gray-200' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
