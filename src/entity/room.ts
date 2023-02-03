import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    creator: {
      type: String,
      required: true,
    },

    video: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
  }
)
export const RoomModel = mongoose.model('Room', schema)