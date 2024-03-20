const Key="6b632783314e4459a9bbdba1399ee604";
const blogcontainer=document.getElementById("bolg-container");

async function fetchRandomNews(){
    try
    {
        const apiUrl=`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6b632783314e4459a9bbdba1399ee604&
                      pageSize=10&apikey=${Key}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
         return data.articles;
        // console.log(data.articles);
    }
    catch
    {
        console.error("Error fetching random news",error);
        return[];
    }
}

function displayBlogs(articles)
{
    blogcontainer.innerHTML="";
    articles.forEach((article)=>{
        const blogcard=document.createElement("div");
        blogcard.classList.add("blog-card");
        const img=document.createElement("img");
        img.src=article.urlToImage
        img.alt=article.title
        const title=document.createElement("h2");
        // title.textContent=article.title;
        const description=document.createElement("p");
        description.textContent=article.description;
        blogcard.appendChild(img);
        blogcard.appendChild(title);
        blogcard.appendChild(description);
        blogcontainer.appendChild(blogcard);
    })
}

(async ()=>{
    try
    {
        const articles=await fetchRandomNews();
        displayBlogs(articles);
    }
    catch(error)
    {
        console.error("error fetching random news",error);
    }
})();

fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6b632783314e4459a9bbdba1399ee604")
.then((response)=>{
    // if(response.ok)
    // {
        return response.json();z
    // }
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error.message);
})