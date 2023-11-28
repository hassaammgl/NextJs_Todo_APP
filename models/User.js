import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
    },
    username: {
      type: String,
      required: true,
      min: 6,
      max: 40,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    registeredAt: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

mongoose.models = {};

export const User = mongoose.model("User", userSchema);

export const checkUserExists = async (email) => {
  const user = await User.findOne({ email });
  console.log(user);
  if (email === user.email) {
    return true;
  } else {
    return false;
  }
};
