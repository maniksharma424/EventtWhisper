import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

//@desc Register Event
//Route PUT /api/users/event
// PUBLIC
const registerEvent = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    if (req.body.event) {
      const event = JSON.parse(req.body.event);
      event._id = new ObjectId();

      user.event.push(event);
    }
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      phone: updatedUser.phone,
      event: updatedUser.event,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

//@desc getEventDetails
//Route GET /api/user/event
// PRIVATE
const getEventDetails = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      phone: user.phone,
      event: user.event,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

//@desc getEventDetails
//Route DELETE /api/user/event
// PRIVATE
const deleteEvent = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    const eventId = new ObjectId(req.body.eventId); // Convert to ObjectId

    user.event = user.event.filter((item) => !item._id.equals(eventId));
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      phone: updatedUser.phone,
      event: updatedUser.event,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

//@desc updateEvent
//Route PATCH /api/user/profile
// PRIVATE
const updateEvent = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    const eventId = new ObjectId(req.body.eventId); // Convert to ObjectId
    const { hour, minutes, timeZone, name, description } = req.body;

    // Find the index of the event in the user's event array
    const eventIndex = user.event.findIndex((item) => item._id.equals(eventId));
    if (eventIndex === -1) {
      res.status(404);
      throw new Error("Event not found");
    }

    // Update the event properties
    user.event[eventIndex].hour = hour || user.event[eventIndex].hour;
    user.event[eventIndex].minutes = minutes || user.event[eventIndex].minutes;
    user.event[eventIndex].timeZone =
      timeZone || user.event[eventIndex].timeZone;
    user.event[eventIndex].name = name || user.event[eventIndex].name;
    user.event[eventIndex].description =
      description || user.event[eventIndex].description;

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      phone: updatedUser.phone,
      event: updatedUser.event,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export { registerEvent, getEventDetails, deleteEvent, updateEvent };
