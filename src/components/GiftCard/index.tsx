import React from 'react'
interface GiftCardProps {
  style: String
}
export default function GiftCard({ style }: GiftCardProps) {
  return (
    <div
      className={`bg-cover bg-center w-56 h-56 outline outline-1 outline-gray-200 rounded-md flex flex-col items-center justify-center ${style}`}
      style={{
        backgroundImage: "url('/assets/giftcards/bg-giftcard.svg')"
      }}
    >
      <div className="font-semibold text-2xl">$1 - $100</div>
      <div className="pt-2"> PayPal</div>
      <img src="/assets/giftcards/paypal.svg" className="pt-4 w-20"></img>
    </div>
  )
}
