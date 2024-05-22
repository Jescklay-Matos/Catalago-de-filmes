function playPause() {
  document.getElementById("btn-play").classList.toggle("bi-play-circle");
  document.getElementById("btn-play").classList.toggle("bi-pause-circle-fill");

  var myVideo = document.querySelector("#video");
  if (myVideo.paused) myVideo.play();
  else myVideo.pause();

  document.addEventListener("click", function () {
    document.getElementById("video").style.display = "inline-block";
  });

  alert("Assistir ao trailer deste filme?...");
  console.log("Assistir ao trailer deste filme......");
}

function playLike() {
  document.getElementById("btn-like").classList.toggle("bi-hand-thumbs-up");
  document
    .getElementById("btn-like")
    .classList.toggle("bi-hand-thumbs-up-fill");
}

function addList() {
  document.getElementById("btn-add").classList.toggle("bi-x-circle");
  document.getElementById("btn-add").classList.toggle("bi-check2-circle");
}

function playVideo() {
  document.getElementById("btn-assistir").classList.toggle("bi-play-circle");
  document
    .getElementById("btn-assistir")
    .classList.toggle("bi-pause-circle-fill");

  var myVideo = document.querySelector("#video");
  if (myVideo.paused) myVideo.play();
  else myVideo.pause();

  document.addEventListener("click", function () {
    document.getElementById("video").style.display = "inline-block";
  });
}

function playRodape() {
  document.getElementById("btn-play-rodape").classList.toggle("bi-play-circle");
  document
    .getElementById("btn-play-rodape")
    .classList.toggle("bi-pause-circle-fill");

  var myVideo = document.querySelector("#video");
  if (myVideo.paused) myVideo.play();
  else myVideo.pause();

  document.addEventListener("click", function () {
    document.getElementById("video").style.display = "inline-block";
  });
}
