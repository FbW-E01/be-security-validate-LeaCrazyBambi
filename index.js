import express from "express";
import { body, validationResult } from "express-validator";
import birdsValidators from "./birdsValidators.js";

const server = express();
server.use(express.json());

const sightings = [];

server.post("/birds", birdsValidators, (req, res) => {
  sightings.push(req.body);

  const result = validationResult(req);
  if (!result.isEmpty()) {
    res.status(400);
    res.json({
      errors: result.errors,
    });
    return;
  }

  res.send("adds a bird sighting to app memory");
});

// Returns current list of bird sightings in app memory
server.get("/birds", (req, res) => {
  res.json(sightings);
  console.log(sightings);
});

server.listen(1200, () => {
  console.log("Listen to http://localhost:1200");
});
