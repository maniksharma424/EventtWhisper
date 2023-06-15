import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import mongoose from "mongoose";

import { cancelScheduledEvent, scheduleEvent } from "../nodeSchedule.js";
import { updateUserInfo } from "../helpers/controllerHelper.js";
const { ObjectId } = mongoose.Types;

//@desc RegisterEvent
//Route PUT /api/users/event
// PUBLIC
const registerEvent = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    req.body.event._id = new ObjectId();

    await user.events.push(req.body.event);
    const updatedUser = await user.save();
    scheduleEvent(req.body.event, req.user.phone);
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
    const eventId = new ObjectId(req.body._id);

    const index = user.events.findIndex((event) => {
      const eventObjectId = new ObjectId(event._id);
      return eventObjectId.equals(eventId);
    });

    if (index === -1) {
      res.status(404);
      throw new Error(`Event not found: ${eventId}`);
    }

    user.events.splice(index, 1);
    const updatedUser = await user.save();
    cancelScheduledEvent(req.body._id);
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
  cancelScheduledEvent(req.body._id);
  const user = await User.findById(req.user._id);
  if (user) {
   const updated = await updateUserInfo(user, req.body);

    user.markModified("events");
    const updatedUser = await user.save();

    scheduleEvent(req.body, req.user.phone);
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      phone: updatedUser.phone,
      events: user.events,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export { registerEvent, getEventDetails, deleteEvent, updateEvent };
