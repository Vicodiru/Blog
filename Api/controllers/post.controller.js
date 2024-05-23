import Post from "../models/post.model.js";
import { errorHandler } from "../utils/error.js";

export const create = async (req, res, next) => {
  // Check if the user is an admin
  if (!req.user.isAdmin) {
    return next(errorHandler(403, "You are not allowed to create a post"));
  }

  // Check if required fields are provided
  if (!req.body.title || !req.body.content) {
    return next(errorHandler(400, "Please provide all required fields"));
  }

  // Generate a slug from the title
  const slug = req.body.title
    .split(" ")
    .join("-")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, "");

  // Create a new post
  const newPost = new Post({
    ...req.body,
    slug,
    userId: req.user.id,
  });

  try {
    // Save the post to the database
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    next(error); // Pass any errors to the error handling middleware
  }
};
