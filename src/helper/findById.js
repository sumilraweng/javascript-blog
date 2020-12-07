import { getData } from "../data.js";

const URL = "https://niravkpatel28.github.io/json-data-server/blogs/blogs.json";

export const findById = (id) => {
  return getData(URL).then((jsonData) => {
    return jsonData.find((blog) => {
      return blog.id == id;
    });
  });
};
