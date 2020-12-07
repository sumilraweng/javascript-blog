import {newBlog} from "../main.js";

export const asideSection=(links)=>{
    const asideTag=document.createElement("aside");
    const h1TagAside=document.createElement("h1");
    const ulTag=document.createElement("ul");
    h1TagAside.innerText="Releated links:";
    // console.log(links)
    
    links.forEach(link => {
        const liTag=document.createElement("li")
        
        ulTag.appendChild(liTag)
        
        liTag.id=link["id"];
        liTag.addEventListener("click",()=>{
            newBlog(liTag.id);
        })

        liTag.innerText=link["title"]

    });

    asideTag.classList.add("aside-section");

    asideTag.append(h1TagAside,ulTag)
    return asideTag;
}