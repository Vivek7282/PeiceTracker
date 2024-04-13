import React, { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function MainContent() {
  let navigate = useNavigate();
  // Initialize data values
  const [data, setData] = useState([]);
  const [selectedBoxIndex, setSelectedBoxIndex] = useState(null);
  const [size, setsize] = useState(null);
  const [operation, setOperation] = useState("");
  const [checker, setChecker] = useState("");
  const [style, setStyle] = useState("");
  const token = localStorage.getItem("token");
  const [user, setUser] = useState([]);
  const [username, setUsername] = useState("");
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
        setUsername(user.name);
        console.log(user.name);
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
  const fetchData = () => {
    axios
      .get("http://localhost:8080/api/v1/user/sizeData")
      .then((response) => {
        setData(response.data);
        // console.log(data[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    if (!user) getUser();
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchData();
      getUser();
      setUsername(user.name);
    }, 1000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(delay);
  }, []);
  console.log(user);
  //   setUser(res.data.data);

  // Function to handle box click
  const handleBoxClick = (index) => {
    setSelectedBoxIndex(index);
    setsize(data[index].size);
  };

  // Function to handle Pass button click
  const handleRejectionButtonClick = () => {
    if (size && operation && checker && style && user) {
      axios
        .post("http://localhost:8080/api/v1/user/reject", {
          size,
          operation,
          checker,
          style,
          user,
        })
        .then((response) => {
          //   console.log("Response from server:", response.data);
          alert("Updated!!!");
          window.location.reload();
          setsize(null);
        })
        .catch((error) => {
          console.error("Error sending data to server:", error);
        });
    } else {
      // Alert the user to select a size if none is selected
      alert("Please select a size before clicking Pass.");
    }
  };
  const handlePassButtonClick = () => {
    console.log(size + operation + checker + style + user);
    if (size && operation && checker && style && user) {
      axios
        .post("http://localhost:8080/api/v1/user/pass1", {
          size,
          operation,
          checker,
          style,
          user,
        })
        .then((response) => {
          alert("Updated!!!");
          window.location.reload();
          //   setSize(null);
        })
        .catch((error) => {
          console.error("Error sending data to server:", error);
        });
    } else {
      alert("Please fill in all fields before clicking Pass.");
    }
  };

  const handleReworkButtonClick = () => {
    if (size && operation && checker && style && user) {
      axios
        .post("http://localhost:8080/api/v1/user/rework", {
          size,
          operation,
          checker,
          style,
          user,
        })
        .then((response) => {
          //   console.log("Response from server:", response.data);
          alert("Updated!!!");
          navigate("/rework");
          setsize(null);
        })
        .catch((error) => {
          console.error("Error sending data to server:", error);
        });
    } else {
      // Alert the user to select a size if none is selected
      alert("Please select a size before clicking Pass.");
    }
  };
  return (
    <>
      <div className="bg-gray-800 text-white w-1/5">
        <div className="py-4 px-6">
          <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Operation</h3>
            <select
              className="block w-full bg-gray-700 text-white py-2 px-3 rounded focus:outline-none"
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
            >
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
            <select
              className="block w-full bg-gray-700 text-white py-2 px-3 rounded focus:outline-none"
              value={checker}
              onChange={(e) => setChecker(e.target.value)}
            >
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
            <select
              className="block w-full bg-gray-700 text-white py-2 px-3 rounded focus:outline-none"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            >
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
      <div className="bg-gray-100 flex-1 p-8">
        <h2 className="text-2xl font-semibold mb-4"></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          {data.map((item, index) => (
            <div
              key={index}
              className={`bg-white p-4 rounded shadow-md ${
                selectedBoxIndex === index ? "bg-gray-400" : ""
              }`}
              onClick={() => handleBoxClick(index)}
              style={{ cursor: "pointer" }}
            >
              <h3 className="text-lg font-semibold mb-2 text-center">
                {item.size}
              </h3>
              <div className="border-b border-gray-300 mb-2"></div>
              <p className="text-center">
                Check {item.measurements[0].Check}
              </p>{" "}
              <p className="text-center">
                <span className="text-green-500">
                  P: {item.measurements[0].P}
                </span>{" "}
                RW: {item.measurements[0].RW}{" "}
                <span className="text-red-500">
                  RJ: {item.measurements[0].RJ}
                </span>
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <button
            className="border border-red-500 text-red-500 px-10 py-2 rounded-lg mr-12"
            onClick={handleRejectionButtonClick}
          >
            Rejection
          </button>
          <button
            className="border border-yellow-500 text-yellow-500 px-10 py-2 rounded-lg mr-12"
            onClick={handleReworkButtonClick}
          >
            Rework
          </button>
          <button
            className="border border-green-500 text-green-500 px-10 py-2 rounded-lg"
            onClick={handlePassButtonClick}
          >
            Pass
          </button>
        </div>

        <div className="flex justify-center mt-10 items-center">
          <Link to="/allrequest">
            <button className="border border-blue-500 text-blue-500 py-2 px-10 rounded-lg">
              Download User Data
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MainContent;
