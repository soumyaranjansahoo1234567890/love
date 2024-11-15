let yes=document.getElementById("yes");
let no=document.getElementById("no");
let message=document.getElementById("message");

no.addEventListener("mouseover",()=>{
  no.style.position="absolute";
  no.style.top=Math.floor(Math.random()*40)+"vh";
  no.style.right=Math.random()*40+"vh";
})
yes.addEventListener("click",()=>{
  message.style.display="block";
})
