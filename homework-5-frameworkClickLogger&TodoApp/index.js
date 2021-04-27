class TodoApplication {
    static id = 0;
    constructor() {
        this.appDiv = document.querySelector("#app");
        this.input = document.createElement('input');
        this.buttonAdd = document.createElement('button');

    }

    getInputValue = ()=>{
        return this.input.value;
    }

    add = (e) =>{
        TodoApplication.id+=1;
        let value = this.getInputValue();
        if(e.type == 'click'){
        this.renderArticle(value);
        }else if(e.keyCode === 13 && value){
        this.renderArticle(value);
        }
    }

    init = ()=>{
        this.appDiv.append(this.input);
        this.appDiv.append(this.buttonAdd);
        this.buttonAdd.addEventListener('click',(event)=>this.add(event));
        document.addEventListener('keydown',(event)=>this.add(event));
        this.buttonAdd.innerText = 'add';
        this.input.setAttribute("placeholder", "link");

    }

    renderArticle =(data)=> {
        let div = document.createElement('div');
        div.setAttribute('id', TodoApplication.id+'');
        div.innerHTML=`
               <a href="${data}">${data}</a>
               <button onclick="event.target.parentElement.remove()">remove</button>`;
        this.appDiv.append(div);
    }
}
class ClickLogger {
    static logIndex = 0;
    constructor(idElems = []) {
        this.appDiv = document.querySelector("#app");
        this.buttonShow = document.createElement('button');
        this.divLogs = document.createElement('div');
        this.idElems = [1,2];
        this.logs = [];
    }

    addListener = (idElems)=>{
        document.querySelectorAll('button').forEach(item => item.addEventListener('click',e=> this.logHandler(e)));
        for(let item of idElems){
            document.getElementById(item).addEventListener('click',e=> this.logHandler(e));
        }
    }

    logHandler = (e)=>{

        ClickLogger.logIndex +=1;
        this.logs.push({index: ClickLogger.logIndex,
            tag:e.currentTarget.tagName,
            time:(new Date).toLocaleString(),
            value:e.currentTarget.innerText});
    }
    renderLogs = ()=>{
        this.divLogs.childNodes.forEach((item,index) => {
            if (index > 0) {
                item.remove()
            }
        });
        let div = document.createElement('div');
        for(let log of this.logs){
            div.innerText += `{ #${log.index} tag:${log.tag},name: ${log.value}, time: ${log.time}}`;

        }
        this.divLogs.append(div);
    }


    init = ()=>{

        this.buttonShow.innerText = 'show logs';
        this.appDiv.prepend(this.divLogs);
        this.divLogs.prepend(this.buttonShow);
        this.buttonShow.addEventListener('click',this.renderLogs);
        this.addListener(this.idElems);
    }


}

const app = new TodoApplication();
const handler = new ClickLogger(['1','2']);
app.init();
handler.init();
