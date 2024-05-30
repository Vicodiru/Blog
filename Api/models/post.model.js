import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default:
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png",
    },
    category: {
      type: String,
      default: "uncategorized",
    },
    date: {
      type: Date,
      default: Date.now,
    },
    membership: {
      type: String,
      default: "not given",
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    telegram: {
      type: String,
      default: null,
    },
    twitter: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
