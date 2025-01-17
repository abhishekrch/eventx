import React, { useState } from 'react';
import { X } from 'lucide-react';

const MetaMaskRequiredPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-4 top-32 z-50 w-80 bg-white rounded-lg shadow-xl border 
    border-gray-200 p-6 animate-fade-in">
      <div className="relative">
        <button
          onClick={handleClose}
          className="absolute -right-2 -top-2 text-gray-500 hover:text-gray-700 
          transition-colors"
        >
          <X size={20} />
        </button>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
          Connect MetaMask and switch to Base Sepolia Testnet to view 
          and book events.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MetaMaskRequiredPopup;