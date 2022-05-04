import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  user: {
    // only post owners can edit/delete specific posts
    type: mongoose.Schema.Types.ObjectId,
    //Am luat user din User.js
    ref: "User",
  },
  text: {
    type: String,
    required: true,
  },
  // name of the user
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  // like - e un array
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Post", postSchema);
