var p1but = document.querySelector("#p1");
var p2but = document.querySelector("#p2");
var resbut = document.querySelector("#reset");
var p1display = document.querySelector("#p1disp");
var p2display = document.querySelector("#p2disp");
var maxscore = document.querySelector("#maxscore");
var numinput = document.querySelector("input");
var p1score = 0;
var p2score = 0;
var gameover = false;
var winningscore=10 ;

p1but.addEventListener("click",function(){
  if(!gameover){
 p1score++;
 if(p1score === winningscore){
   p1display.classList.add("winner");
 gameover=true;
}
 p1display.textContent =p1score;
}
});

p2but.addEventListener("click",function(){
  if(!gameover){
 p2score++;
 if(p2score === winningscore){
   p2display.classList.add("winner");
 gameover=true;
 }
 p2display.textContent =p2score;
 }
 });
 resbut.addEventListener("click",function()
{
  p1score=0;
  p2score=0;
  p1display.textContent=0;
  p2display.textContent=0;
  p1display.classList.remove("winner");
  p2display.classList.remove("winner");
  gameover=false;
}
);
 numinput.addEventListener("change", function()
 {
   maxscore.textContent = numinput.value;
   winningscore = Number(numinput.value);

 }
);
