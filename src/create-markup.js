const wrapper=document.createElement("div")
wrapper.classList.add("wrapper");
const headerTag=document.createElement("header")
headerTag.classList.add("header");
const h1TagHeader=document.createElement("h1");
const h1TagBlog=document.createElement("h1");
const h1TagAside=document.createElement("h1");
const mainTag=document.createElement("main");
const blogDiv=document.createElement("div")
blogDiv.classList.add("blog");
const imageDiv =document.createElement("div")
imageDiv.classList.add("image-section");
const imageTag=document.createElement("img");
const paraDiv=document.createElement("div")
paraDiv.classList.add("paragraph-section");
const pTag=document.createElement("p");
const asideTag=document.createElement("aside")
asideTag.classList.add("aside-section");
const ulTag=document.createElement("ul");
const footerTag=document.createElement("footer")
footerTag.classList.add("footer");

document.body.appendChild(wrapper);
wrapper.append(headerTag,mainTag,asideTag,footerTag);
headerTag.appendChild(h1TagHeader);

mainTag.appendChild(blogDiv);
blogDiv.append(h1TagBlog,imageDiv,paraDiv);
imageDiv.appendChild(imageTag);
paraDiv.appendChild(pTag);

asideTag.append(h1TagAside,ulTag)
h1TagAside.innerText="Releated links:";

h1TagHeader.innerText="Blog";

const flag=0;

function display(blogObj,blogObjList){

    h1TagBlog.innerText=blogObj["title"];
    imageTag.src=blogObj["imageUrl"] 
    pTag.innerText=blogObj["content"] ;

    links=blogObj["links"];
 
    ulTag.innerHTML=""
    links.forEach(link => {
        const liTag=document.createElement("li")
        
        ulTag.appendChild(liTag)
        
        liTag.id=link["id"];
        liTag.onclick=function(){
           findById(liTag.id,blogObjList)
        };
        liTag.innerText=link["title"]

    });
    console.log(document.getElementsByTagName("ul"))
    

}

