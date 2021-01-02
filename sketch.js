// mam try resizing the browser and refresh it its auto adjustable
var bg;
var font;
var search;
var submit;
var result;
var footer;
function preload(){
  bg=loadImage('assets/bg.png');
  font=loadFont('assets/LemonMilk.otf');
   footer=loadImage('assets/name.png');
}
function setup(){
createCanvas(window.innerWidth,window.innerHeight);
// search box
// creating search box

 search=createInput();
 search.position(width/2-100,height/2-210);

//  styling the search box

 search.style("border-radius","20px");
 search.style("border-color","crimson");
 search.style("border-width","5px");
 search.style("width","200px");
 search.style("height","30px");

//  submit button

 submit=createButton("Submit");
 submit.position(width/2-40,height/2-150);

//  styling the button

 submit.style("border-color","lightpink");
 submit.style("width","100px");
 submit.style("height","30px");
 submit.style("color","skyblue");
 submit.style("border-width","4px");
 submit.style("border-radius","4px");
 submit.style("cursor","pointer");

}
function draw(){
  background(bg);
  image(footer,width-250,height-100,200,100);
  // header

  textFont(font);
  textSize(60);
  fill("crimson");
  text("Dictionary",width/2-150,200);
  fill("yellow");
  noStroke();
  ellipse(width/2-108,140,20,20);

  // fetching meaning from api
  submit.mousePressed(async()=>{
  var fetching= await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+search.value());
  var respone=await fetching.json();
  result=respone[0].meanings[0].definitions[0].definition;  
  });

  // only to appear if the response is not null
  if(result!=null&&result!=""){
  textSize(20);
  fill("whitesmoke")  
  text(result,submit.x-250,submit.y+100);
  }
}
