const startButton = document.getElementById("startButton");

startButton.addEventListener("click", function () {
  alert("Я приготовил для тебя кое-что особенное ❤️");
});
const memoryVideo = document.getElementById("memoryVideo");
const memoryVideoSource = document.getElementById("memoryVideoSource");
const prevVideo = document.getElementById("prevVideo");
const nextVideo = document.getElementById("nextVideo");
const videoCounter = document.getElementById("videoCounter");

const videos = [
  "video/first-meeting.mp4",
  "video/second-video.mp4"
];

let currentVideo = 0;

function changeVideo(index) {
  memoryVideo.pause();

  currentVideo = index;

  memoryVideoSource.src = videos[currentVideo];
  memoryVideo.load();

  videoCounter.textContent = `${currentVideo + 1} / ${videos.length}`;
}

nextVideo.addEventListener("click", function () {
  const next = (currentVideo + 1) % videos.length;
  changeVideo(next);
});

prevVideo.addEventListener("click", function () {
  const previous = (currentVideo - 1 + videos.length) % videos.length;
  changeVideo(previous);
});
