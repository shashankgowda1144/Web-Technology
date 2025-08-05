console.log("start");

setTimeout(()=>{
    console.log("hello"); 
},3000)

console.log("end");

let id;

function start(){
    clearInterval(id)
    let hr=document.getElementById("hr");
    let min=document.getElementById("min");
    let sec=document.getElementById("sec");
    let mili=document.getElementById("mili");
    id=setInterval(()=>{
        if(mili.innerText>=99){
            sec.innerText = Number(sec.innerText)+1
            mili.innerText=0
        }
        if(sec.innerText>=59){
            min.innerText = Number(min.innerText)+1
            sec.innerText=0
        }
        if(min.innerText>59){
            hr.innerText = Number(hr.innerText)+1
            min.innerText=0;
        }
        mili.innerText = Number(mili.innerText)+1
    },10)
};


function stop(){
    clearInterval(id)
}