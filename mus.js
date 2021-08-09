const music=document.querySelector("audio");
const play=document.getElementById("play");
const img=document.querySelector("img");
const next=document.getElementById("next");
const prev=document.getElementById("prev");
const main=document.getElementById("main");
const colors=['red','blue','green','yellow','orange'];


const songs=[
    {
    name:"Akshay",
    title:"barsat",
    artist:"jubin",
    },
    {
        name:"Akshay1",
        title:"pani",
        artist:"badsha",
    },
];
isplaying=false;
const playmusic=()=>{
    isplaying=true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
   
};
const pausemusic=()=>{
    isplaying=false;
    music.pause();
    play.classList.replace('fa-pause','fa-play');
}
play.addEventListener("click",()=>{
      if(isplaying){
          pausemusic();
      }
      else{
          playmusic();
      }
});
//loading the next songs
const loadsong=(songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src="/keep notes/music/"+songs.name+".mp3";
    img.src="/keep notes/music/"+songs.name+".jpg";
};
loadsong(songs[0])
let songIndex=0;
const nextSongs=()=>{
    songIndex=(songIndex+1)%songs.length;
    loadsong(songs[songIndex]);
    playmusic();
};
const prevSongs=()=>{
    songIndex=(songIndex-1+songs.length)%songs.length;
    loadsong(songs[songIndex]);
    playmusic();
};
next.addEventListener("click",nextSongs);
prev.addEventListener("click",prevSongs);