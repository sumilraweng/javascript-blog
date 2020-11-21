const URL="https://niravkpatel28.github.io/json-data-server/blogs/blogs.json";


const findById=(id,blogObjList)=>{
    
    const blogObj=blogObjList.find((blog)=>{
        return blog.id==id
    });
    display(blogObj,blogObjList);
    
}


async function getData(url){
    try{
        const blogDataResponse= await fetch(url)
        
        if(blogDataResponse.ok){
            const jsonData= await blogDataResponse.json();
            return jsonData;
        }
        
    }catch(err){
        console.log(err);
    }
}

getData(URL).then(
    jsonData=>{
        display(jsonData[0],jsonData)
    } 
).catch(err=>{
    console.log(err)
})

