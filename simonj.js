let gameseq=[];
let userseq=[];
let btns=["red","green","yellow","purple"];
let started=false;
let level=0;
let highscore=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function()
{
    if(started==false)
    {
        console.log("Game started");
        started=true;
        levelup();
    }
});
function gameflash(btn)
{
   btn.classList.add("flash");
   setTimeout(function(){
   btn.classList.remove("flash");
   },250);   
}

function userflash(btn)
{
   btn.classList.add("userflash");
   setTimeout(function(){
   btn.classList.remove("userflash");
   },250);   
}
function levelup()
{
    userseq=[];
    level++;
   
    h2.innerText=`level ${level}`;
    //random button choose
    let randidx=Math.floor(Math.random()*3) ;
    let randclr=btns[randidx];
    let randbtn=document.querySelector(`.${randclr}`);
   
    gameseq.push(randclr);
    // console.log(gameseq);
    gameflash(randbtn);

 }
function checkans(idx)
{
    
    if(userseq[idx]===gameseq[idx])
    {
        if(userseq.length==gameseq.length)
        {
            setTimeout(levelup,1000);
            
        }
    }
    else
    {
        
        let high=level;
        if(high>highscore)
        {
            highscore=high;
        }
        
        
        h2.innerHTML=`game over! Your score was <b>${level}</b><br> Press any key to restart <br> High score is ${highscore} `;
        document.querySelector("body").style.backgroundColor="red";
         
        setTimeout(function()
        {document.querySelector("body").style.backgroundColor="#EBF4F6";

        },150);
        reset();
    }
    

}

function btnpress()
{
    let btn=this;
    userflash(btn);
    // console.log(this);
    userclr=btn.getAttribute("id");
    userseq.push(userclr);
    checkans(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    
    level=0;

}

/*
const btnch=document.querySelectorAll(".btn");
console.log(btnch);

function ch(){


}


btnch.addEventListener("mousedown",(e)=>{
    e.style.boxShadow="inset 7px 7px 15px yelllow";

})
*/











