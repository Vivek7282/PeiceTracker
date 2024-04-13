const express = require("express");
const User = require("../models/User");
const SizeData = require("../models/Data");
const UserInfo = require("../models/UserInfo");
const router = express.Router();
const cors = require("cors");

const bcrypt = require("bcryptjs");

const app = express();

app.use(cors());

router.post("/createUser", async (req, res) => {
  const { name, phone, email, password } = req.body;
  console.log(req.body);
  try {
    // Validate input
    if (!name || !phone || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user
    const newUser = new User({
      name,
      phone,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User added successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/pass", async (req, res) => {
  const { size } = req.body;
  //   console.log(req.body);
  try {
    // Find the size in the collection
    let existingSize = await SizeData.findOne({ size });

    if (existingSize) {
      // If size found, increment Check and P by one
      existingSize.measurements[0].Check++;
      existingSize.measurements[0].P++;
      await existingSize.save();
    } else {
      // If size not found, insert a new object
      existingSize = new SizeData({
        size,
        measurements: [{ Check: 1, P: 1, RW: 0, RJ: 0 }],
      });
      await existingSize.save();
    }

    res.status(200).json({ message: "Size updated successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/reject", async (req, res) => {
  try {
    // console.log(req.body);
    const { size, style, operation, checker } = req.body;
    const passInfo = "Reject";
    const username = req.body.user.name;
    // Create a new instance of UserInfo model
    let existingSize = await SizeData.findOne({ size });

    if (existingSize) {
      // If size found, increment Check and P by one
      existingSize.measurements[0].RJ++;
      await existingSize.save();
    } else {
      // If size not found, insert a new object
      existingSize = new SizeData({
        size,
        measurements: [{ Check: 1, P: 0, RW: 0, RJ: 1 }],
      });
      await existingSize.save();
    }
    const userInfo = new UserInfo({
      username,
      size,
      style,
      operation,
      checker,
      passInfo,
    });

    // Save the userinfo to the database
    await userInfo.save();

    // Respond with success message
    res.status(201).json({ message: "UserInfo stored successfully" });
  } catch (error) {
    // Handle errors
    console.error("Error storing userinfo:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/rework", async (req, res) => {
  //   const { size } = req.body;
  // console.log(req.body);
  try {
    // console.log(req.body);
    const { size, style, operation, checker } = req.body;
    const passInfo = "Rework";
    const username = req.body.user.name;
    // Create a new instance of UserInfo model
    let existingSize = await SizeData.findOne({ size });

    if (existingSize) {
      // If size found, increment Check and P by one
      existingSize.measurements[0].RW++;
      await existingSize.save();
    } else {
      // If size not found, insert a new object
      existingSize = new SizeData({
        size,
        measurements: [{ Check: 1, P: 0, RW: 1, RJ: 0 }],
      });
      await existingSize.save();
    }
    const userInfo = new UserInfo({
      username,
      size,
      style,
      operation,
      checker,
      passInfo,
    });

    // Save the userinfo to the database
    await userInfo.save();

    // Respond with success message
    res.status(201).json({ message: "UserInfo stored successfully" });
  } catch (error) {
    // Handle errors
    console.error("Error storing userinfo:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/pass1", async (req, res) => {
  try {
    // console.log(req.body);
    const { size, style, operation, checker } = req.body;
    const passInfo = "Pass";
    const username = req.body.user.name;
    // Create a new instance of UserInfo model
    let existingSize = await SizeData.findOne({ size });

    if (existingSize) {
      // If size found, increment Check and P by one
      existingSize.measurements[0].RJ++;
      await existingSize.save();
    } else {
      // If size not found, insert a new object
      existingSize = new SizeData({
        size,
        measurements: [{ Check: 1, P: 1, RW: 0, RJ: 0 }],
      });
      await existingSize.save();
    }
    const userInfo = new UserInfo({
      username,
      size,
      style,
      operation,
      checker,
      passInfo,
    });

    // Save the userinfo to the database
    await userInfo.save();

    // Respond with success message
    res.status(201).json({ message: "UserInfo stored successfully" });
  } catch (error) {
    // Handle errors
    console.error("Error storing userinfo:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/sizeData", async (req, res) => {
  try {
    const sizeData = await SizeData.find({});
    res.json(sizeData);
  } catch (error) {
    console.error("Error fetching size data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
router.get('/userinfo', async (req, res) => {
    try {
      const userinfo = await UserInfo.find();
      res.json(userinfo);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;
