import mongoose from "mongoose";

const eventInfoSchema = mongoose.Schema([
  {
    hour: {
      type: Number,
      required: true,
    },
    minutes: {
      type: Number,
      required: true,
    },
    timeZone: {
      type: String,
      required: true,
      enum: ["AM", "PM"],
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
]);

const Event = mongoose.model("Event", eventInfoSchema);

export default Event;
