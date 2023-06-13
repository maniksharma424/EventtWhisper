import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

//@desc Register Event
//Route PUT /api/users/event
// PUBLIC
const registerEvent = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {

      console.log(req.body.event);

      req.body.event._id = new ObjectId();

   await  user.events.push(req.body.event);

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      phone: updatedUser.phone,
      events: updatedUser.events,
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
      events: user.events,
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

    user.events = user.events.filter((item) => !item._id.equals(eventId));
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      phone: updatedUser.phone,
      events: updatedUser.events,
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
    const {day,month,year, hour, minutes, timeZone, name, description ,active} = req.body;

    // Find the index of the event in the user's event array
    const eventIndex = user.events.findIndex((item) => item._id.equals(eventId));
    if (eventIndex === -1) {
      res.status(404);
      throw new Error("Event not found");
    }
    // Update the event properties
    user.events[eventIndex].day = day || user.events[eventIndex].day;
    user.events[eventIndex].month = month || user.events[eventIndex].month;
    user.events[eventIndex].year = year || user.events[eventIndex].year;
    user.events[eventIndex].hour = hour || user.events[eventIndex].hour;
    user.events[eventIndex].minutes = minutes || user.events[eventIndex].minutes;
    user.events[eventIndex].timeZone =
      timeZone || user.events[eventIndex].timeZone;
    user.events[eventIndex].name = name || user.events[eventIndex].name;
    user.events[eventIndex].description =
      description || user.events[eventIndex].description;
    user.events[eventIndex].active =
      active || user.events[eventIndex].active;

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      phone: updatedUser.phone,
      events: updatedUser.events,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export { registerEvent, getEventDetails, deleteEvent, updateEvent };
