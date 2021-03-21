var FirstNam = prompt("Please enter your name");
if(FirstNam===null||FirstNam===""){
    var sayhello ="hi ,welcome to in the MOVIEWORLD";
}else{var sayhello ="hi "+FirstNam+",welcome to in the MOVIEWORLD";}


alert(sayhello);



var age= prompt("Please tell me how old are you? so that I can suggest a suitable movie for your age groups");



while(age==0 || age==null||age<0){
   
    age= prompt("Please tell me how old are you?");
 }






var FavoriteMovieType = prompt("Can you tell me what movies you like, are they comedies, action,  animation or adventures? Please tell me so that I can suggest a movie to you");


while(FavoriteMovieType!=="comedies"&&FavoriteMovieType!=="action"&&FavoriteMovieType!=="animation"&&FavoriteMovieType!=="adventures")
{
    
   
    FavoriteMovieType = prompt("Do you like movies comedies, action,  animation or adventures(please only write comedies or action or animation or adventures)?");
   
}
   
   
if(age<18){

 while(FavoriteMovieType!=="comedies"&&FavoriteMovieType!=="animation"){
    FavoriteMovieType = prompt(" Depending on your age choose animation or comedies");}

if(FavoriteMovieType==="comedies"){   
document.write("  I suggest you watch this movie because it is appropriate for your age group. I wish you an enjoyable view ");
document.write('<a href="https://www.youtube.com/watch?v=16tu42cQbrU">'+"home alone"+'</a>');}
else if(FavoriteMovieType==="animation"){

    document.write("I suggest you watch this movie I wish you an enjoyable view  ");
    document.write('<a href="https://www.youtube.com/watch?v=bKweNJ3HsOo">'+"mulan"+'</a>');}





    /*var numMOVIE=prompt("How many movies do you want to watch a day, one, two,?");


    for(var i=0;i<=numMOVIE;i++)
    {
    if(age<18){

      switch(i) {
        case 0:
        document.write("  If you do not prefer to watch a movie at the moment then I wish you a happy time ");
        break;  
      case 1:
      document.write(" I wish you a pleasant watch "+'<a href="https://www.youtube.com/watch?v=16tu42cQbrU">'+"home alone"+'</a>'+ '<img src="https://images-na.ssl-images-amazon.com/images/I/91tXzecvy-L._SL1500_.jpg" alt="Comedy movies">');
        break;
      case 2:
      document.write(" I wish you a pleasant watch "+'<a href="https://www.youtube.com/watch?v=sOlP10fDclE>'+"Mr Bean"+'</a>'+ '<img src="https://i.guim.co.uk/img/media/f2a9d671a3b06f8244d6e6f92a546c111624b210/0_65_2053_1231/master/2053.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=3158bfa4b0466eab332d35334923dcf6" alt="comedy movie">');
        
    }
}*/
    }














if(age>=18){

if(FavoriteMovieType==="comedies"){
    document.write("I suggest you watch this movie I wish you an enjoyable view  ");
    document.write('<a href="https://www.youtube.com/watch?v=16tu42cQbrU">'+"home alone"+'</a>');}
    else if(FavoriteMovieType==="action"){
    document.write("I suggest you watch this movie I wish you an enjoyable view  ");
    document.write('<a href="https://www.youtube.com/results?search_query=action+movies+2019">'+"spedra man"+'</a>');}
else if(FavoriteMovieType==="animation"){ 
    document.write("I suggest you watch this movie I wish you an enjoyable view  ");
    document.write('<a href="https://www.youtube.com/watch?v=bKweNJ3HsOo">'+"mulan"+'</a>');}
else if(FavoriteMovieType==="adventures"){
    document.write("I suggest you watch this movie I wish you an enjoyable view  ");
    document.write('<a  href="https://www.youtube.com/watch?v=cbXvIU1F7BM">'+"mowgli movie"+'</a>');}


   

    


}


 var numMOVIErep=prompt(" How many times do you like repeating the movie?");
var repimage ;

 for(var i=0;i<=numMOVIErep;i++){
repimage+='<br><img src="https://miro.medium.com/max/1120/0*ckAOzr7BW6fhFeGK.jpg" alt="movie"hight="200" width="100">'
  
    ;}    
    
    
    
    document.write(repimage);
   







for(var i=0;i<age;i++){
    if(FirstNam===null||FirstNam===""){
        console.log("hi");}
    else {console.log("hi "+FirstNam);}
    }

