import schedule from "node-schedule";
import sendAlerts from "./alert.js";

import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

const convertTo24HourFormat = (hour, period) => {
  let hour24 = parseInt(hour, 10);

  if (period.toLowerCase() === "pm" && hour24 !== 12) {
    hour24 += 12;
  } else if (period.toLowerCase() === "am" && hour24 === 12) {
    hour24 = 0;
  }

  return hour24.toString().padStart(2, "0");
};

export const scheduleEvent = (event, phone) => {
  const { name, description, day, month, year, hour, minutes, timeZone, _id } =
    event;
  const newMonth = parseInt(month);
  const newHour = convertTo24HourFormat(hour, timeZone);
  const jobId = new ObjectId(_id);
  const date = new Date(year, newMonth, day, newHour, minutes, 0);
  console.log(date);
  console.log(jobId);
  const job = schedule.scheduleJob(`${jobId}`, date, () => {
    sendAlerts(name, description, phone);
    console.log(job);
  });
};

export const cancelScheduledEvent = (_id) => {
  const jobId = new ObjectId(_id);
  const job = schedule.scheduledJobs[`${jobId}`];
  job.cancel();
};
