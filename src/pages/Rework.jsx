import React, { useState, useEffect } from "react";
import axios from "axios";
function Rework() {
  const [columns, setColumns] = useState([
    { name: "Broken Stitch", value: 0 },
    { name: "Open Seam", value: 0 },
    { name: "Loose Stitch", value: 0 },
    { name: "Chad Variation", value: 0 },
    { name: "Uneven Seam", value: 0 },
    { name: "Up & Down", value: 0 },
    { name: "Center Out", value: 0 },
    { name: "Sticker Mark", value: 0 },
    { name: "Number Missing Matching", value: 0 },
    { name: "Joint Up & Down", value: 0 },
    { name: "Tension Mark", value: 0 },
    { name: "Down Stitch", value: 0 },
    { name: "Uneven Stitch", value: 0 },
    { name: "Shape Out", value: 0 },
    { name: "Stain", value: 0 },
    { name: "Needle Marks", value: 0 },
    { name: "Inside Visible", value: 0 },
    { name: "Damage", value: 0 },
    { name: "Width Uneven", value: 0 },
    { name: "Line Cross", value: 0 },
    { name: "Sleeve Reverse", value: 0 },
    { name: "Waviness", value: 0 },
    { name: "Piping", value: 0 },
    { name: "Puckering", value: 0 },
    { name: "Skip Stitch", value: 0 },
    { name: "Roping", value: 0 },
    { name: "Weaving", value: 0 },
    { name: "Uncut Thread", value: 0 },
    { name: "Fraying Edges", value: 0 },
    { name: "Wrong Side", value: 0 },
    { name: "Wrong Size Part", value: 0 },
    { name: "Wrong Trims", value: 0 },
    { name: "Raw Edge", value: 0 },
    { name: "Joint Stitch", value: 0 },
    { name: "Unwanted Pleat", value: 0 },
    { name: "Missing Label", value: 0 },
    { name: "Missing/Unsecured Button", value: 0 },
    { name: "Line Out", value: 0 },
    { name: "High Low", value: 0 },
    { name: "Size Jump", value: 0 },
    { name: "Middle Out", value: 0 },
    { name: "Visible Stitch", value: 0 },
  ]);
  const token = localStorage.getItem("token");
  console.log(token);
  const [user, setUser] = useState([]);
  const getUser = async () => {
    try {
      //   dispatch(showLoading());
      const res = await axios.get(
        "http://localhost:8080/api/v1/user/userData",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      //   dispatch(hideLoading());
      // console.log(res.data);
      if (res.data.success) {
        setUser(res.data.data);
        console.log(res.data.data);
      } else {
        localStorage.clear();
        console.log("fail");
        // return <Navigate to="/login" />;
      }
    } catch (error) {
      localStorage.clear();
      //   dispatch(hideLoading());
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  console.log(user.name);
  const handleIncrement = (name) => {
    const updatedColumns = columns.map((column) =>
      column.name === name ? { ...column, value: column.value + 1 } : column
    );
    setColumns(updatedColumns);
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Columns data:", columns);
  };

  const handleCancel = () => {
    // Handle cancel logic here
    console.log("Cancelled");
  };

  return (
    <div className="container mx-auto px-2 py-8">
      <h2 className="text-xl text-center font-semibold mb-4">Rework</h2>
      <div className="flex flex-wrap">
        {[...Array(Math.ceil(columns.length / 11))].map((_, index) => (
          <div key={index} className="w-1/4">
            <table className="w-full border-collapse border border-gray-400 mb-2">
              <thead>
                <tr>
                  <th className="border px-4 py-2 border-gray-400">Name</th>
                  <th className="px-4 py-2 border border-gray-400">Value</th>
                  <th className="px-4 py-2 border border-gray-400">Action</th>
                </tr>
              </thead>
              <tbody>
                {columns
                  .slice(index * 11, index * 11 + 11)
                  .map((column, innerIndex) => (
                    <tr key={innerIndex}>
                      <td className="text-sm px-4 py-2 border border-gray-400">
                        {column.name}
                      </td>
                      <td className="px-4 py-2 border border-gray-400">
                        {column.value}
                      </td>
                      <td className="px-4 py-2 border border-gray-400">
                        <button
                          onClick={() => handleIncrement(column.name)}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          +
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={handleSave}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
        >
          Save
        </button>
        <button
          onClick={handleCancel}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Rework;
