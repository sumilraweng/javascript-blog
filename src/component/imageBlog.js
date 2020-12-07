export const blogImage=(url)=>{
    const imageDiv =document.createElement("div")
    imageDiv.classList.add("image-section");
    const imageTag=document.createElement("img");
    imageTag.src=url
    imageTag.alt="Blog image"
    imageDiv.appendChild(imageTag);
    return imageDiv;
}