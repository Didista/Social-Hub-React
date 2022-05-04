import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    // e obligatoriu sa punem numele, atunci folosim required:true
    required: true,
  },
  email: {
    type: String,
    required: true,
    // Eroare daca punem un email de doua ori folosind unique:true
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("User", userSchema);
