export const contentBlog=(content)=>{


    const blogTitle=document.createElement("h1");
    const paraDiv=document.createElement("div")
    paraDiv.classList.add("paragraph-section");
    const pTag=document.createElement("p");

    paraDiv.append(pTag);
    
    pTag.innerText=content;

    return paraDiv;



}