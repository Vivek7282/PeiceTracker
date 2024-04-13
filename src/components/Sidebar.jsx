// Sidebar.js
import React from "react";

function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-1/5">
      <div className="py-4 px-6">
        <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
        <div className="mb-4">
          <h3 className="text-sm font-semibold mb-2">Operation</h3>
          <select className="block w-full bg-gray-700 text-white py-2 px-3 rounded focus:outline-none">
            <option value="Front">Front</option>
            <option value="Back">Back</option>
            <option value="Sleeve">Sleeve</option>
            <option value="Collar">Collar</option>
            <option value="Cuff">Cuff</option>
            <option value="Assembly">Assembly</option>
            <option value="Endline">Endline</option>
          </select>
        </div>
        <div className="mb-4">
          <h3 className="text-sm font-semibold mb-2">Checker</h3>
          <select className="block w-full bg-gray-700 text-white py-2 px-3 rounded focus:outline-none">
            <option value="3100590">[3100590] Shashikala</option>
            <option value="3100751">[3100751] Gyanti Devi</option>
            <option value="3100800">[3100800] Anitha</option>
            <option value="3100804">[3100804] A M Ruksan</option>
            <option value="3101043">[3101043] Banitha Mahalik</option>
            <option value="3101105">[3101105] NATARAJU K N</option>
            <option value="3217032">[3217032] Kavya S B</option>
            <option value="3217480">[3217480] Rukamani Bai A</option>
            <option value="3217644">[3217644] Mamatha N</option>
            <option value="3217689">[3217689] Priva A</option>
            <option value="3217795">[3217795] Sunita Prusty</option>
            <option value="3218544">[3218544] Madhu Chauhan</option>
            <option value="3218651">[3218651] Mamta C</option>
            <option value="3218656">[3218656] Karre Sharada</option>
            <option value="3426469">[3426469] Uday Kumar H K</option>
            <option value="3426751">[3426751] Chandrakala</option>
            <option value="3427046">[3427046] Parvati S Koravar</option>
            <option value="3427047">[3427047] Shivasharanappa</option>
          </select>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Style</h3>
          <select className="block w-full bg-gray-700 text-white py-2 px-3 rounded focus:outline-none">
            <option value="72625-0098">72625-0098</option>
            <option value="72625-0099">72625-0099</option>
            <option value="72625-0100">72625-0100</option>
            <option value="85748-0002">85748-0002</option>
            <option value="968466-1001">968466-1001</option>
            <option value="D12704-801165">D12704-801165</option>
            <option value="D12704-801165-T">D12704-801165-T</option>
            <option value="D14667-442204">D14667-442204</option>
            <option value="D14667-465110">D14667-465110</option>
            <option value="D14667-465110-T">D14667-465110-T</option>
            <option value="D14667-542743">D14667-542743</option>
            <option value="D15774-442111">D15774-442111</option>
            <option value="D15774-442204">D15774-442204</option>
            <option value="D24252-442111">D24252-442111</option>
            <option value="D24252-442204">D24252-442204</option>
            <option value="D24252-442204-T">D24252-442204-T</option>
            <option value="D27429-419260">D27429-419260</option>
            <option value="D39599-512354">D39599-512354</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
