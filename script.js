const music = [
  {
    src: "./musics/X2Download.app - David Kushner - Daylight (Official Music Video) (128 kbps).mp3",
    artis_name: "David Kusher",
    music_name: "Daylight",
    music_img:"./photos/david.jpeg"
  },
  {
    src: "./musics/X2Download.app - Kenya Grace - Strangers (128 kbps).mp3",
    artis_name: "Kenya Grace",
    music_name: "Strangers",
    music_img:"./photos/kenya.jpeg"
  },
  {
    src: "./musics/X2Download.app - Post Malone - Chemical (Official Music Video) (128 kbps).mp3",
    artis_name: "Post Malone",
    music_name: "Chemical",
    music_img:"./photos/postmalone.jpeg"
  },
  {
    src: "./musics/X2Download.app - Rema - Charm (Official Music Video) (128 kbps).mp3",
    artis_name: "Rema",
    music_name: "Charm",
    music_img:"./photos/rema.jpeg"
  },
  {
    src: "./musics/X2Download.app - Shubh - Cheques (Official Music Video) (128 kbps).mp3",
    artis_name: "Shubh",
    music_name: "Cheques",
    music_img:"./photos/Cheques.jpeg"
  }
];
var shuffle = false;
var myAudio = document.querySelector("audio");

function playMusic() {
  if (myAudio.paused) {
    myAudio.play();
  } else {
    myAudio.pause();
  }
}
function loopMusic() {
  myAudio.toggleAttribute("loop");
  document.querySelector(".loop-svg").classList.toggle("loop");
}
var now_music_index = 0;
window.onload = function () {
  myAudio.volume = document.querySelector(".audio-volume").value / 100;
  document
    .querySelector(".music-src")
    .setAttribute("src", `${music[now_music_index].src}`);
  document.querySelector(
    ".artist-name"
  ).innerHTML = `${music[now_music_index].artis_name}`;
  document.querySelector(
    ".music-name"
  ).innerHTML = `${music[now_music_index].music_name}`;
  document.querySelector(".top-music-src").setAttribute("src",`${music[now_music_index].music_img}`)
  getMusicTimeAndDuration();
};
document.querySelector(".audio-volume").addEventListener("input", (e) => {
  myAudio.volume = e.target.value / 100;
});
function musiChanger(index) {
  now_music_index += index;
  if (now_music_index > music.length - 1) {
    now_music_index = 0;
  } else if (now_music_index < 0) {
    now_music_index = music.length - 1;
  }
  document
    .querySelector(".music-src")
    .setAttribute("src", `${music[now_music_index].src}`);
  document.querySelector(
    ".artist-name"
  ).innerHTML = `${music[now_music_index].artis_name}`;
  document.querySelector(
    ".music-name"
  ).innerHTML = `${music[now_music_index].music_name}`;
  document.querySelector(".top-music-src").setAttribute("src",`${music[now_music_index].music_img}`)
  getMusicTimeAndDuration();
  // document.querySelector('input[type="checkbox"]').checked=false
  //playMusic();
  myAudio.play();
}
function getMusicTimeAndDuration() {
  myAudio.load();
  var currentTime = 0;
  var music_duration = 0;
  myAudio.addEventListener("loadedmetadata", function () {
    music_duration = myAudio.duration;
    var minutes = Math.floor(music_duration / 60);
    var seconds = Math.floor(music_duration % 60);

    document.querySelector(".music-duration").innerHTML = `${minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  });
  myAudio.addEventListener("timeupdate", function () {
    currentTime = myAudio.currentTime;
    var minutes = Math.floor(currentTime / 60);
    var seconds = Math.floor(currentTime % 60);
    document.querySelector(".music-time").innerHTML = `${minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    } /`;
  });
}

myAudio.addEventListener("ended", function () {
  if (shuffle) {
    var rnd= Math.floor(Math.random()*music.length)
    document
      .querySelector(".music-src")
      .setAttribute("src", `${music[rnd].src}`);
    document.querySelector(
      ".artist-name"
    ).innerHTML = `${music[rnd].artis_name}`;
    document.querySelector(
      ".music-name"
    ).innerHTML = `${music[rnd].music_name}`;
    document.querySelector(".top-music-src").setAttribute("src",`${music[now_music_index].music_img}`)
    getMusicTimeAndDuration();
    playMusic();
    console.log(rnd)
  } else {
    musiChanger(1);
  }
});

function shuffleMusic() {
  document.querySelector(".shuffle-svg").classList.toggle("shuffle");
  shuffle = true;
}
