import Button from 'components/Button'
import React from 'react'
import { Link } from 'react-router-dom'

interface ButtonGroupProps {
  buttons: string[]
  page_url: Array<string>
  selectedButton: string
  onButtonClick: (button: string) => void
}

export default function ButtonGroup({
  buttons,
  selectedButton,
  page_url,
  onButtonClick
}: ButtonGroupProps) {
  return (
    <div className="flex space-x-2">
      {buttons.map((button, index) => (
        <Link to={page_url[index]}>
          <Button
            key={index}
            text={button}
            variant={
              selectedButton === button
                ? 'transparent-primary'
                : 'transparent-gray'
            }
            style="text-[14pt]"
            onClick={() => onButtonClick(button)}
          />
        </Link>
      ))}
    </div>
  )
}
