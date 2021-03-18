var FirstNam = prompt("Please enter your name");
if(FirstNam===null||FirstNam===""){
    var sayhello ="hi ,welcome to in the MOVIEWORLD";
}else{var sayhello ="hi "+FirstNam+",welcome to in the MOVIEWORLD";}


alert(sayhello);



var FavoriteMovieType = prompt("Can you tell me what movies you like, are they comedies, action,  animation or adventures? Please tell me so that I can suggest a movie to you");




if(FavoriteMovieType==="comedies"){
 document.write("I suggest you watch this movie I wish you an enjoyable view  ");
 document.write('<a href="https://www.youtube.com/watch?v=16tu42cQbrU">'+"home alone"+'</a>');

}else if(FavoriteMovieType==="action"){
    document.write("I suggest you watch this movie I wish you an enjoyable view  ");
    document.write('<a href="https://www.youtube.com/results?search_query=action+movies+2019">'+"spedra man"+'</a>');
}else if(FavoriteMovieType==="animation"){ 
    document.write("I suggest you watch this movie I wish you an enjoyable view  ");
    document.write('<a href="https://www.youtube.com/watch?v=bKweNJ3HsOo">'+"mulan"+'</a>');
}else if(FavoriteMovieType==="adventures"){
    document.write("I suggest you watch this movie I wish you an enjoyable view  ");
    document.write('<a  href="https://www.youtube.com/watch?v=cbXvIU1F7BM">'+"mowgli movie"+'</a>');

}else {
FavoriteMovieType = prompt("Can you tell me what movies you like, are they comedies, action,  c or adventures? Please tell me so that I can suggest a movie to you");

}





  