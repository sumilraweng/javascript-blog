
import {blogImage} from "./component/imageBlog.js";
import{ contentBlog} from "./component/contentBlog.js"



export const mainsection=(title,content,imageUrl)=>{
    const mainTag=document.createElement("main");
    const blogDiv=document.createElement("div")
    blogDiv.classList.add("blog");
    
    const h1TagBlog=document.createElement("h1")
    h1TagBlog.innerText=title;


    blogDiv.append(h1TagBlog,blogImage(imageUrl),contentBlog(content));

    mainTag.appendChild(blogDiv)

    return mainTag;

}