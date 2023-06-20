import mongoose from "mongoose";
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
