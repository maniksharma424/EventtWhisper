import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//@desc AuthUser
//Route POST /api/user/auth
// PUBLIC
const authUser = asyncHandler(async (req, res) => {
  const { phone, password } = req.body;
  const user = await User.findOne({ phone });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.json({
      _id: user._id,
      name: user.name,
      phone: user.phone,
    });
  } else {
    res.status(401);
    throw new Error("Inavlid Phone or Password");
  }
});

//@desc Register User
//Route POST /api/user
// PUBLIC
const registerUser = asyncHandler(async (req, res) => {
  const { name, phone, password } = req.body;

  //check user exists
  const userExists = await User.findOne({ phone });

  if (userExists) {
    throw new Error("user already exists");
  }
  const user = await User.create({
    name,
    phone,
    password,
  });
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      phone: user.phone,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

//@desc logOutUser
//Route POST /api/user/logout
// PUBLIC
const logOutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "user logged out" });
});

//@desc GetUSerProfile
//Route GET /api/user/profile
// PRIVATE
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user_id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      phone: user.phone,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

//@desc UpdateUSerProfile
//Route PUT /api/user/profile
// PRIVATE
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user_id);
  if (user) {
    user.name = req.body.name || user.name;
    user.phone = req.body.phone || user.phone;

    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      phone: updatedUser.phone,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

//@desc UpdateUSerProfile
//Route DELETE /api/user/profile
// PRIVATE
const deleteUser = asyncHandler(async (req, res) => {
  const userId = req.user_id;

  // Find the user by _id and remove it
  const deletedUser = await User.findByIdAndRemove(userId);

  if (deletedUser) {
    res.json({
      message: "User deleted successfully",
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export {
  authUser,
  registerUser,
  logOutUser,
  getUserProfile,
  updateUserProfile,
  deleteUser,
};
