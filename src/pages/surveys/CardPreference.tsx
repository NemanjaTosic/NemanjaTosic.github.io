import Toggle from 'components/Toggle'
import React from 'react'

export default function CardPreference() {
  return (
    <>
      <div className="flex items-center font-semibold mt-2">
        <div className="w-16">
          {/* Toggle component */}
          <Toggle onToggle={() => {}} />
        </div>
        <div>Account Updates</div>
      </div>
      <div className="pt-2 text-gray-500 text-sm">
        {/* Description of Email Preference */}
        Updates about your account such as reaching a new level or winning
        points on the leaderboard
      </div>
    </>
  )
}
