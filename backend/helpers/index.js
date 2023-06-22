import mongoose from "mongoose";
import User from "../models/userModel.js";
const { ObjectId } = mongoose.Types;
export const updateUserInfo = async (user, event) => {
  const eventId = new ObjectId(event._id); // Convert to ObjectId
  const {
    day,
    month,
    year,
    hour,
    minutes,
    timeZone,
    name,
    description,
    active,
  } = event;
  const index = user.events.findIndex((event) => {
    const eventObjectId = new ObjectId(event._id); // Convert event._id to ObjectId
    return eventObjectId.equals(eventId);
  });
  if (index === -1) {
    res.status(404);
    throw new Error(`Event not found ${index}`);
  }

  user.events[index].day = await (day || user.events[index].day);
  user.events[index].month = (await month) || user.events[index].month;
  user.events[index].year = await (year || user.events[index].year);
  user.events[index].hour = await (hour || user.events[index].hour);
  user.events[index].minutes = await (minutes || user.events[index].minutes);
  user.events[index].timeZone = await (timeZone || user.events[index].timeZone);
  user.events[index].name = await (name || user.events[index].name);
  user.events[index].description = await (description ||
    user.events[index].description);
  user.events[index].active = await active;
};
export const convertTo24HourFormat = (hour, period) => {
  let hour24 = parseInt(hour, 10);

  if (period.toLowerCase() === "pm" && hour24 !== 12) {
    hour24 += 12;
  } else if (period.toLowerCase() === "am" && hour24 === 12) {
    hour24 = 0;
  }

  return hour24.toString().padStart(2, "0");
};



export const handleCompletedEvent = (USER, event) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findById(USER._id);
      if (user) {
        const eventId = new ObjectId(event._id);

        const index = user.events.findIndex((event) => {
          const eventObjectId = new ObjectId(event._id);
          return eventObjectId.equals(eventId);
        });

        if (index === -1) {
          reject(new Error(`Event not found: ${eventId}`));
        } else {
          user.events[index].active = false
          user.markModified("events");
          const updatedUser = await user.save();
          resolve(updatedUser);
        }
      } else {
        reject(new Error("User not found"));
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const getActiveEvents = (array) =>{
  const count = array.reduce((accumulator, obj) => {
    if (obj.active) {
      return accumulator + 1;
    } else {
      return accumulator;
    }
  }, 0);
  return count
}