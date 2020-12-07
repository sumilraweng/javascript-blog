import { mainsection } from "../blog.js";
import { asideSection } from "../component/linkBlog.js";

export const displayBlog = (blogObj) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  document.body.appendChild(wrapper);

  const h1TagHeader = document.createElement("h1");
  const headerTag = document.createElement("header");
  headerTag.classList.add("header");
  const footerTag = document.createElement("footer");
  footerTag.classList.add("footer");

  h1TagHeader.innerText = "Blog";
  headerTag.appendChild(h1TagHeader);

  wrapper.append(
    headerTag,
    mainsection(blogObj.title, blogObj.content, blogObj.imageUrl),
    asideSection(blogObj.links),
    footerTag
  );
  return document.body;
};
