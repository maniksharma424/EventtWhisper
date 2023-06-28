import schedule, { scheduledJobs } from "node-schedule";
import { io } from "../server.js";

import sendAlerts from "./alert.js";
import { convertToValidDate, handleCompletedEvent } from "../helpers/index.js";
import mongoose from "mongoose";
import { roomId } from "../server.js";
const { ObjectId } = mongoose.Types;

export const scheduleEvent = async (event, user) => {
  console.log('scheduling start');
  const { day, month, year, hour, minutes, timeZone, _id } =
    event;
  const date = convertToValidDate(day, month, year, hour, minutes, timeZone);
  const jobId = new ObjectId(_id);
console.log(date);
  const job = schedule.scheduleJob(`${jobId}`, date, () => {
    sendAlerts(event, user);
    handleCompletedEvent(user, event).then((updatedUser) => {
      io.to(roomId).emit("scheduledEventTriggered", updatedUser.events);
    });
  });
};

export const cancelScheduledEvent = (_id) => {
  console.log('cancelling start');
  const jobId = new ObjectId(_id);
  const job = schedule.scheduledJobs[`${jobId}`];
  job.cancel();
  console.log(job);

};
