// Initialize express app
import express from "express";
import { find, findById, insert, update, remove } from "./users/model.js";
const app = express();

app.use(express.json());

// GET ALL USERS
app.get("/api/users", async (req, res) => {
  const Allusers = await find();
  if (Allusers) {
    res.status(200).json(Allusers);
  } else {
    res.status(404).json({ message: "The users information could not be retrieved" });
  }
});

// GET USER BY ID


// CREATE A NEW USER

// UPDATE A USER


// DELETE A USER  


// export default app
export default app;
