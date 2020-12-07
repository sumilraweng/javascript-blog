import { getData } from "./data.js";
import { displayBlog } from "./helper/displayBlog.js";
import { findById } from "./helper/findById.js";

const URL = "https://niravkpatel28.github.io/json-data-server/blogs/blogs.json";

export const newBlog = (idBlog) => {
  document.body.textContent = "";
  const data = findById(idBlog);
  data.then((blogData) => {
    displayBlog(blogData);
  });
};

window.newBlog = newBlog;

window.onload = () => {
  getData(URL)
    .then((jsonData) => {
      displayBlog(jsonData[0]);
    })
    .catch((err) => {
      console.log(err);
    });
};
