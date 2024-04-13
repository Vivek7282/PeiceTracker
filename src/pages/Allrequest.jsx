import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";

const Allrequest = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    // Fetch userinfo data from backend API
    axios
      .get("http://localhost:8080/api/v1/user/userinfo")
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.error("Error fetching userinfo:", error);
      });
  }, []);

  // Function to generate PDF document
  const generatePDF = () => {
    // Create new jsPDF instance
    const doc = new jsPDF();

    // Set up table header
    const headers = [
      ["Username", "Size", "Style", "Operation", "Checker", "Pass Info"],
    ];

    // Extract data from userInfo for table content
    const data = userInfo.map((user) => [
      user.username,
      user.size,
      user.style,
      user.operation,
      user.checker,
      user.passInfo,
    ]);

    // Set up table
    doc.autoTable({
      head: headers,
      body: data,
      startY: 20,
    });

    // Save the PDF
    doc.save("userinfo.pdf");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">All Requests</h2>
      <table className="w-full table-auto border-collapse border border-gray-400 mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">Username</th>
            <th className="border border-gray-400 px-4 py-2">Size</th>
            <th className="border border-gray-400 px-4 py-2">Style</th>
            <th className="border border-gray-400 px-4 py-2">Operation</th>
            <th className="border border-gray-400 px-4 py-2">Checker</th>
            <th className="border border-gray-400 px-4 py-2">Pass Info</th>
          </tr>
        </thead>
        <tbody>
          {userInfo.map((user) => (
            <tr key={user._id}>
              <td className="border border-gray-400 px-4 py-2">
                {user.username}
              </td>
              <td className="border border-gray-400 px-4 py-2">{user.size}</td>
              <td className="border border-gray-400 px-4 py-2">{user.style}</td>
              <td className="border border-gray-400 px-4 py-2">
                {user.operation}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {user.checker}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {user.passInfo}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={generatePDF}
      >
        Download PDF
      </button>
    </div>
  );
};

export default Allrequest;
