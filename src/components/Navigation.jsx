import { LogIn, Menu, Wallet } from "lucide-react";

export default function Navigation() {
  function handleMenu() {
    console.log("Clicked me!");
  }

  return (
    <nav
      className="p-3 flex bg-white justify-between
    items-center"
    >
      <a href="#" id="brand" className="flex gap-2 items-center">
        <img
          src="../../logo2.svg"
          className="object-cover max-w-12 max-h-12"
        ></img>
        <span className="text-lg font-medium font-display">
          Event<span className="text-red-500 font-display">X</span>
        </span>
      </a>

      <div id="nav-menu" className="hidden md:flex gap-12">
        <a href="#" className="font-medium hover:text-primary">
          Concerts
        </a>
        <a href="#" className="font-medium hover:text-primary">
          Sports
        </a>
        <a href="#" className="font-medium hover:text-primary">
          Arts & Theatre
        </a>
      </div>

      <button className="hidden md:flex gap-2 items-center
      border border-gray-400 px-6 py-2 rounded-lg hover:text-primary">
        <Wallet />
        <span>Connect</span>
        </button>

      <button
        className="p-2 md:hidden"
        onClick={() => {
          handleMenu();
        }}
      >
        <Menu className="h-7 w-7 text-gray-600" />
      </button>
    </nav>
  );
}

// <Wallet /> <LogIn />
