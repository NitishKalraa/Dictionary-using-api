// mam try resizing the browser and refresh it its auto adjustable
var bg;
var font;
var search;
var submit;
var meaning,synonym;
var footer;
var res;//response
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
 search.position(width/2-100,height/4);

//  styling the search box

 search.style("border-radius","20px");
 search.style("border-color","crimson");
 search.style("border-width","5px");
 search.style("width","200px");
 search.style("height","30px");

//  submit button

 submit=createButton("Submit");
 submit.position(width/2-40,search.y+80);

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
  text("Dictionary",width/2-150,search.y-50);
  fill("yellow");
  noStroke();
  ellipse(width/2-108,search.y-110,20,20);

  // fetching meaning from api
 
  submit.mousePressed(async()=>{
  if(search.value()==""){

  alert("enter something");

  }else{  

   var fetching= await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+search.value());
   res=await fetching.json();
   meaning=res[0].meanings[0].definitions[0].definition;
   synonym=res[0].meanings[1].definitions[0].synonyms;
  }});

  // only to appear if the response is not null
  if(meaning!=null&&meaning!=""){

  textSize(20);
  text("MEANING :",40,submit.y+50);
  fill("whitesmoke");

  if(meaning.length>80){  

  var temp1=meaning.slice(0,80);
  var temp2=meaning.slice(80,meaning.length);  
  text(temp1,20,submit.y+100);
  text(temp2,20,submit.y+150);

  }else{

    text(meaning,20,submit.y+100);

    }
   fill("navy");
   text("SYNONYMS :",40,submit.y+200); 
   for(var i=0;i<synonym.length;i++){
    fill("orange");
    text("🔴 "+synonym[i],50,submit.y+250+i*30); 
  }
 }
}

