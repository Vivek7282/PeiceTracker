// Navbar.js
import React from "react";
import { VscAccount } from "react-icons/vsc";
function Navbar() {
  return (
    <div className="bg-blue-800 text-white p-4 flex justify-between items-center">
      <div>
        <h1 className="font-bold">Piece Tracker</h1>
      </div>
      <div className="text-xl font-bold">
        <VscAccount
          style={{ width: "30px", height: "30px", fontWeight: "bold" }}
        />
      </div>
    </div>
  );
}

export default Navbar;
