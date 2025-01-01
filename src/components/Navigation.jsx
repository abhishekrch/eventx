import { Menu, Wallet, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isNavDialogVisible, setIsNavDialogVisible] = useState(false);

  function handleMenu() {
    setIsNavDialogVisible(!isNavDialogVisible);
  }

  return (
    <nav
      className="p-3 flex bg-white justify-between
    items-center"
    >
      <a href="#" id="brand" className="flex gap-2 items-center">
        <img src="../../logo2.svg" className="object-cover max-w-12 max-h-12"></img>
        <span className="text-lg font-medium font-display">
          Event<span className="text-red-500 font-display">X</span>
        </span>
      </a>

      <div id="nav-menu" className="hidden md:flex gap-12">
        <a href="#" className="font-medium hover:text-primary">Concerts</a>
        <a href="#" className="font-medium hover:text-primary">Sports</a>
        <a href="#" className="font-medium hover:text-primary">Arts & Theatre</a>
      </div>

      <button
        className="hidden md:flex gap-2 items-center
          border border-gray-400 px-6 py-2 rounded-lg
        hover:text-primary"
      >
        <Wallet />
        <p>Connect</p>
      </button>

      <button
        className="p-2 md:hidden"
        onClick={() => {
          handleMenu();
        }}
      >
        <Menu className="h-7 w-7 text-gray-600" />
      </button>

      <div
        id="nav-dialog"
        className={`fixed z-10 md:hidden bg-white inset-0 p-3 ${
          isNavDialogVisible ? "" : "hidden"
        }`}
      >
        <div id="nav-bar" className="flex justify-between">

          <a href="#" id="brand" className="flex gap-2 items-center">
            <img src="../../logo2.svg" className="object-cover max-w-12 max-h-12"></img>
            <span className="text-lg font-medium font-display">
              Event<span className="text-red-500 font-display">X</span>
            </span>
          </a>

          <button
            className="p-2 md:hidden"
            onClick={() => {
              handleMenu();
            }}
          >
            <X className="h-7 w-7 text-gray-600" />
          </button>

        </div>

        <div className="mt-6">
          <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">
            Concerts
          </a>
          <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">
            Sports
          </a>
          <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">
            Arts & Theatre
          </a>
        </div>

        <div className="h-[1px] bg-gray-300 "></div>

        <button
          className="mt-6 w-full flex justify-center gap-2 items-center
          border border-gray-400 px-6 py-2 rounded-lg
           hover:border-gray-600"
        >
          <Wallet />
          <p>Connect</p>
        </button>
        
      </div>
    </nav>
  );
}
