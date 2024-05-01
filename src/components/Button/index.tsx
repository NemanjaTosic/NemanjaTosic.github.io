import React from 'react'

type ButtonProps = {
  text: string | React.ReactNode
  style?: string | React.ReactNode
  onClick: () => void
  variant?:
    | 'primary'
    | 'danger'
    | 'outline'
    | 'outline-gray'
    | 'primary-transparent'
    | 'transparent'
    | 'white'
    | 'transparent-gray'
    | 'transparent-primary'
  disabled?: boolean
}

export default function Button({
  text,
  onClick,
  style = 'text-sm rounded-md w-max',
  variant = 'primary',
  disabled = false
}: ButtonProps) {
  const getVarientClassName = () => {
    if (disabled) return 'bg-gray-200 text-gray-500 cursor-not-allowed'
    switch (variant) {
      case 'primary-transparent':
        return 'shadow-sm bg-blue-600/[.70] hover:bg-primary-500/[.70] text-white text-3xl bold-medium'
      case 'primary':
        return 'shadow-sm bg-primary-500 hover:opacity-90 text-white'
      case 'white':
        return 'shadow-sm bg-white text-black'
      case 'danger':
        return 'shadow-sm bg-red-500 hover:bg-red-400 text-white'
      case 'outline':
        return 'shadow-sm bg-white border border-primary-500 text-black hover:text-primary-500'
      case 'outline-gray':
        return 'shadow-sm bg-white border border-gray-600 hover:bg-gray-600 text-gray-600 hover:text-white'
      case 'transparent-gray':
        return 'transition-all duration-200 w-max text-gray-500 hover:text-primary-500'
      case 'transparent':
        return 'w-max text-white bg-transparent'
      case 'transparent-primary':
        return 'text-primary-500'
      default:
        return 'shadow-sm bg-white border border-gray-600 hover:bg-gray-600 text-gray-600 hover:text-white'
    }
  }

  return (
    <button
      disabled={disabled}
      className={`block px-3.5 py-2.5 text-center focus-visible:outline  focus-visible:outline-2  focus-visible:outline-sky-600 ${style} ${getVarientClassName()} `}
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
    >
      {text}
    </button>
  )
}
