import React from 'react'

export default function CardButtonGroup() {
  return (
    <div className="flex-row lg:flex lg:flex-col space-y-4">
      <div
        className="transition-color flex items-center ease-in-out duration-300 cursor-pointer outline outline-1 outline-gray-200
       h-20 md:w-72 rounded-full hover:bg-primary-100"
      >
        <div className="pl-4">
          {/* Cash Icon */}
          <svg
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            className="text-primary-500"
          >
            <path
              opacity="0.2"
              d="M2.625 10.5H25.375L14 3.5L2.625 10.5Z"
              fill="currentColor"
            ></path>
            <path
              d="M2.625 10.5H25.375L14 3.5L2.625 10.5Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M6.125 10.5V19.25"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M11.375 10.5V19.25"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M16.625 10.5V19.25"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M21.875 10.5V19.25"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M3.5 19.25H24.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M1.75 22.75H26.25"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <div className="pl-2 text-xl">Cash</div>
      </div>

      <div
        className="transition-color flex items-center ease-in-out duration-300 cursor-pointer outline outline-1 outline-gray-200
       h-20 w-72 rounded-full hover:bg-primary-100"
      >
        <div className="pl-4">
          {/* Gift Card Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28 28"
            fill="none"
            width="32"
            height="32"
            className="text-primary-500"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M23.625 8.75H4.375a.875.875 0 0 0-.875.875v3.5c0 .483.392.875.875.875h19.25a.875.875 0 0 0 .875-.875v-3.5a.875.875 0 0 0-.875-.875ZM22.75 14v7.875a.875.875 0 0 1-.875.875H6.125a.875.875 0 0 1-.875-.875V14M14 8.75v14M18.955 7.514C17.708 8.75 14 8.75 14 8.75s0-3.708 1.236-4.955a2.63 2.63 0 0 1 3.719 3.72ZM9.045 7.514C10.292 8.75 14 8.75 14 8.75s0-3.708-1.236-4.955a2.63 2.63 0 0 0-3.719 3.72Z"
            ></path>
            <path
              fill="currentColor"
              d="M22.75 14v7.875a.875.875 0 0 1-.875.875H6.125a.875.875 0 0 1-.875-.875V14h17.5Z"
              opacity=".2"
            ></path>
          </svg>
        </div>
        <div className="pl-2 text-xl">Gift Cards</div>
      </div>

      <div
        className="transition-color flex items-center ease-in-out duration-300 cursor-pointer outline outline-1 outline-gray-200
       h-20 w-72 rounded-full hover:bg-primary-100"
      >
        <div className="pl-4">
          {/* Debit Icon */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary-500"
          >
            <path
              opacity="0.2"
              d="M2.625 10.5985H25.375V21.0001C25.375 21.2321 25.2828 21.4547 25.1187 21.6188C24.9546 21.7829 24.7321 21.8751 24.5 21.8751H3.5C3.26794 21.8751 3.04538 21.7829 2.88128 21.6188C2.71719 21.4547 2.625 21.2321 2.625 21.0001V10.5985Z"
              fill="currentColor"
            ></path>
            <path
              d="M24.5 6.125H3.5C3.01675 6.125 2.625 6.51675 2.625 7V21C2.625 21.4832 3.01675 21.875 3.5 21.875H24.5C24.9832 21.875 25.375 21.4832 25.375 21V7C25.375 6.51675 24.9832 6.125 24.5 6.125Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M18.375 18.375H21.875"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M13.125 18.375H14.875"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M2.625 10.5985H25.375"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <div className="pl-2 text-xl">Credit Cards</div>
      </div>

      <div
        className="transition-color flex items-center ease-in-out duration-300 cursor-pointer outline outline-1 outline-gray-200
       h-20 w-72 rounded-full hover:bg-primary-100"
      >
        <div className="pl-4">
          {/* Donations Icon */}
          <svg
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            className="text-primary-500"
          >
            <path
              opacity="0.2"
              d="M14 23.625C14 23.625 3.0625 17.5 3.0625 10.0625C3.0625 8.7477 3.51804 7.4735 4.35162 6.4567C5.18519 5.4399 6.34531 4.74331 7.63459 4.48546C8.92387 4.2276 10.2627 4.4244 11.4232 5.04238C12.5837 5.66036 13.4943 6.66134 14 7.87501V7.87501C14.5057 6.66134 15.4163 5.66036 16.5768 5.04238C17.7373 4.4244 19.0761 4.2276 20.3654 4.48546C21.6547 4.74331 22.8148 5.4399 23.6484 6.4567C24.482 7.4735 24.9375 8.7477 24.9375 10.0625C24.9375 17.5 14 23.625 14 23.625Z"
              fill="currentColor"
            ></path>
            <path
              d="M3.5 14H7.875L9.625 11.375L13.125 16.625L14.875 14H17.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M3.07344 10.5C3.0625 10.3578 3.0625 10.2047 3.0625 10.0625C3.0625 8.7477 3.51804 7.4735 4.35162 6.4567C5.18519 5.4399 6.34531 4.74331 7.63459 4.48546C8.92387 4.2276 10.2627 4.4244 11.4232 5.04238C12.5837 5.66036 13.4943 6.66134 14 7.87501V7.87501C14.5057 6.66134 15.4163 5.66036 16.5768 5.04238C17.7373 4.4244 19.0761 4.2276 20.3654 4.48546C21.6547 4.74331 22.8148 5.4399 23.6484 6.4567C24.482 7.4735 24.9375 8.7477 24.9375 10.0625C24.9375 17.5 14 23.625 14 23.625C14 23.625 9.63594 21.175 6.42031 17.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <div className="pl-2 text-xl">Donations</div>
      </div>
    </div>
  )
}
