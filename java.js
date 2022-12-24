console.log("Welcome to the news website");
let key='595cbee15cfb478ebe35ac5e456f71f2';
let newsAccordian = document.getElementById('newsAccordion');
newsAccordian.style.color='red';
newsAccordian.style.border="10px";

const xhr=new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${key}`,true);
xhr.onload=function(){
    if(this.status===200){
        let json=JSON.parse(this.responseText);
       // console.log(json);
        let articles=json.articles;
        console.log(articles);
        let newsHtml="";
        articles.forEach(function(element,index) {
            let news = `<div class="card">
            <div class="card-header" id="headingTwo">
                <h2 class="mb-0">
                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                        data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">               
                        <b>Breaking News ${index+1}: </b>${element["title"]}.<a href=${element["url"]} target="_blank"> <br> Read more here  </a>
                    </button>
                </h2>
            </div>
            <div id="collapse${index}" class="collapsed " aria-labelledby="heading${index}" data-parent="#accordionExample">
                <div class="card-body">
                    ${element["content"]}
                </div>
            </div>
            </div>`;
            newsHtml+=news;
        });
        //newsAccordian.style.border='2px';
        newsAccordian.innerHTML= newsHtml;
    }
    else{
        console.log("Error occured");
    }
}
xhr.send();




