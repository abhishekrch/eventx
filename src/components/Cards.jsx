import { ethers } from 'ethers'

const Cards = ({ occasion, toggle, setToggle, setOccasion }) => {
  const togglePop = () => {
    setOccasion(occasion)
    setToggle(!toggle)
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-4 py-3 sm:px-6 border-b border-gray-200">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">{occasion.name}</h2>
        </div>
        
        <div className="block sm:hidden">
          <div className="p-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-500">Time</p>
                <p className="text-sm font-medium text-gray-900">
                  <strong>{occasion.date}</strong>
                  <br />
                  {occasion.time}
                </p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-500">Price</p>
                <p className="text-sm text-gray-900">
                  {ethers.formatUnits(occasion.cost.toString(), 'ether')} ETH
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">Location</p>
              <p className="text-sm text-gray-900">{occasion.location}</p>
            </div>
            
            <div className="pt-2">
              {occasion.tickets.toString() === '0' ? (
                <button
                  type="button"
                  className="w-full inline-flex justify-center items-center px-4 py-2 text-sm 
                  font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none 
                  focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Sold Out
                </button>
              ) : (
                <button
                  type="button"
                  className="w-full inline-flex justify-center items-center px-4 py-2 text-sm font-medium
                   rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 
                   focus:ring-offset-2 focus:ring-blue-500"
                  onClick={togglePop}
                >
                  View Seats
                </button>
              )}
            </div>
          </div>
        </div>
        
        <div className="hidden sm:block">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500
                 uppercase tracking-wider w-1/4">
                  Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 
                uppercase tracking-wider w-2/5">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 
                uppercase tracking-wider w-1/6">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 
                uppercase tracking-wider w-1/6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    <strong>{occasion.date}</strong>
                    <br />
                    {occasion.time}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{occasion.location}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {ethers.formatUnits(occasion.cost.toString(), 'ether')} ETH
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex justify-start">
                    {occasion.tickets.toString() === '0' ? (
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md
                         text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 
                         focus:ring-offset-2 focus:ring-red-500 min-w-[100px] justify-center"
                      >
                        Sold Out
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md
                         text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2
                          focus:ring-offset-2 focus:ring-blue-500 min-w-[100px] justify-center"
                        onClick={togglePop}
                      >
                        View Seats
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Cards

