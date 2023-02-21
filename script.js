console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let masterSongName= document.getElementById('masterSongname');
let songItems = Array.from (document.getElementsByClassName('songItem'));

let songs =[
    {songName: "Shauq", filePath: "songs/1.mp3" , coverPath:"covers/cover1.jpg", duration:"4:16"},
    {songName: "Kabira", filePath: "songs/2.mp3" , coverPath:"covers/cover2.jpg", duration:"4:11"},
    {songName: "Ishq wala love", filePath: "songs/3.mp3" , coverPath:"covers/cover3.jpg", duration:"3:45"},
    {songName: "Samjhawan", filePath: "songs/4.mp3" , coverPath:"covers/cover4.jpg", duration:"4:25"},
    {songName: "Tere liye", filePath: "songs/5.mp3" , coverPath:"covers/cover5.jpg", duration:"5:33"},
    {songName: "Phir Mohabbat", filePath: "songs/6.mp3" , coverPath:"covers/cover6.jpg", duration:"5:48"},
    {songName: "Channa mereya", filePath: "songs/7.mp3" , coverPath:"covers/cover7.jpg", duration:"5:45"},
    {songName: "Kaise Hua", filePath: "songs/8.mp3" , coverPath:"covers/cover8.jpg", duration:"4:14"},
    {songName: "Rahe na rahe", filePath: "songs/9.mp3" , coverPath:"covers/cover9.jpg", duration:"2:16"},
    {songName: "Zaroori tha", filePath: "songs/10.mp3" , coverPath:"covers/cover10.jpg", duration:"5:16"}
];
songItems.forEach((element,i)=>{
     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    //  element.getElementsByClassName("timestamp")[0].innerText = songs[i].duration;
})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pasue-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.classList.add("fa-play-circle");
    element.classList.remove("fa-pause-circle")
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        masterSongName.innerText= songs[songIndex].songName;
        songIndex=parseInt(e.target.id);
        gif.style.opacity=1;
       e.target.classList.remove("fa-play-circle");
       e.target.classList.add("fa-pause-circle");
       audioElement.src=`songs/${songIndex+1}.mp3`;
       audioElement.currentTime=0;
       audioElement.play();
       masterPlay.classList.remove("fa-play-circle");
       masterPlay.classList.add("fa-pause-circle");
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
    songIndex +=1;
    }
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.src=`songs/${songIndex+1}.mp3`;
       audioElement.currentTime=0;
       audioElement.play();
       masterPlay.classList.remove("fa-play-circle");
       masterPlay.classList.add("fa-pause-circle");
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
    songIndex -=1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
       audioElement.currentTime=0;
       audioElement.play();
       masterPlay.classList.remove("fa-play-circle");
       masterPlay.classList.add("fa-pause-circle");
})
