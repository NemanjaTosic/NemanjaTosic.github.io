import React from 'react'
import TransactionCard from './TransactionCard'

export default function SectionWallet() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center py-16">
      <div className="rounded-md p-6 min-w-[600px]  md bg-white shadow-md">
        {/* Title */}
        <div className="pb-2 text-lg">Rewards & Transactions</div>
        <div className="border-b-[1px] border-gray-200 mb-4"></div>
        <div className="text-gray-500 font-semibold pb-4">Rewards</div>

        {/* Available Points */}
        <div className="h-10 justify-between flex items-center px-2 rounded-md bg-blue-100">
          <div>Available Points:</div>
          <div className="font-semibold">506 Points(≈ $5.06)</div>
        </div>

        {/* Lifetime Points */}
        <div className="h-10 justify-between flex items-center px-2 rounded-md bg-blue-100 mt-2">
          <div>Life Time Points:</div>
          <div className="font-semibold">506 Points(≈ $5.06)</div>
        </div>

        {/* Approved Points */}
        <div className="h-10 justify-between flex items-center px-2 rounded-md bg-blue-100 mt-2">
          <div>Approved Points:</div>
          <div className="font-semibold">0 Points</div>
        </div>

        {/* Withdraw Section */}
        <div className="mt-4 flex items-center justify-between">
          <div className="w-64">
            <div className="relative">
              <label
                htmlFor="input"
                className="bg-white absolute left-4 top-1 text-gray-600 pointer-events-none"
              >
                Withdraw Point
              </label>
              <input
                type="text"
                id="input"
                className="border hover:border-blue-500 border-gray-300 focus:border-blue-500 rounded-md px-4 py-2 w-full mt-4"
                placeholder=" "
              />
            </div>
          </div>

          {/* Collect Button */}
          <div className="w-32">
            <div className="cursor-pointer transition duration-200 text-white p-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% shadow-md hover:from-indigo-600 hover:from-10% hover:via-sky-500 hover:to-emerald-400 hover:to-80% rounded-lg">
              <div className="text-xl font-semibold text-center">Collect</div>
            </div>
          </div>
        </div>

        <div className="pt-4 mb-6 border-b-[1px] border-gray-200"></div>

        {/* Transactions Section */}
        <div className="text-gray-500 font-semibold">Transactions</div>
        {Array(10)
          .fill(0)
          .map((item) => (
            <TransactionCard />
          ))}
      </div>
    </div>
  )
}
