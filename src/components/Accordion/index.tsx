import React, { useState } from 'react'

interface AccordionItem {
  title: string
  content: string
}

interface AccordionProps {
  items: AccordionItem[]
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div className="w-full overflow-hidden sm:rounded-md shadow-md">
      {items.map((item, index) => (
        <div key={index} className={`${index !== 0 && 'mt-4'} bg-white py-2 `}>
          <button
            className="w-full  flex items-center justify-between px-4 py-2 text-lg font-medium text-left text-gray-700 focus:outline-none transition-transform duration-300 ease-in-out"
            onClick={() => toggleItem(index)}
          >
            <span>{item.title}</span>
            <svg
              className={`w-5 h-5 transition-transform ${
                openIndex === index ? 'transform rotate-180' : ''
              } text-gray-400`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.293 7.293a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1-0.001-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={`${
              openIndex === index
                ? 'transform max-h-full opacity-100'
                : 'transform max-h-0 opacity-0'
            } overflow-hidden transition-all duration-300 ease-in-out`}
          >
            <div className="px-4 py-4 text-gray-600 leading-6 font-indent-2">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion
