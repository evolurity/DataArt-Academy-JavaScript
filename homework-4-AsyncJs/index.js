class Comments {
    constructor() {
        this.article = document.createElement('article');
        this.input = document.createElement('input');
        this.comments = [];
    }

    handler = (event)=>{
        this.filterComments(event.target.value);
    }
    init = async ()=>{
        await this.getComments();
        this.render(this.comments);
    }

    getComments = async ()=>{
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
            this.comments = await response.json();
        }catch (e){
            console.log(e);
        }
    };
    filterComments =  (email)=>{
       const result =  this.comments.filter(comment=> comment.email.toLowerCase().includes(email));
       this.article.innerHTML = "";
       this.render(result);
    }
    render = (result)=> {
        this.input.addEventListener('keyup',(event)=>{this.handler(event)});

        for (let item of result) {
        this.article.innerHTML += `
        Post id:  ${item.postId}   <br/>
        Comment: ${item.id}  <br/>
        Author: ${item.name}  <br/>
        Email: ${item.email}   <br/>
        Text: ${item.body}    <br/><br/><hr/>
        `;
        }
        appDiv.append(this.input);
        appDiv.append(this.article);
    }
}

const appDiv = document.querySelector('#app');
const application = new Comments();
application.init();




