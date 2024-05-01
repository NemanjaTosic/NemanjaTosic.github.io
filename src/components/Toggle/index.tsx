import { useState } from 'react'

type ToggleProps = {
  onToggle: (isChecked: boolean) => void
}
export default function Toggle({ onToggle }: ToggleProps) {
  const [isChecked, setIsChecked] = useState(false)

  const handleToggle = () => {
    const newValue = !isChecked
    setIsChecked(newValue)
    onToggle(newValue)
  }

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="hidden"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div
          className={`toggle_line w-12 h-6 bg-blue-500 outline outline-2 outline-blue-500 rounded-full shadow-inner
          ${
            isChecked
              ? 'bg-blue-500 outline-blue-500'
              : 'bg-gray-500 outline-gray-500'
          } `}
        ></div>
        <div
          className={`toggle_dot absolute w-6 h-6 bg-white rounded-full shadow top-0 left-0
          transition-transform
          duration-300
          ease-in-out  ${isChecked ? 'transform translate-x-full' : ''}`}
        ></div>
      </div>
    </label>
  )
}
