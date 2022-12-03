// The face detection does not work on all browsers and operating systems.

// If you are getting a `Face detection service unavailable` error or similar,
// it's possible that it won't work for you at the moment.

const video = document.querySelector('.webcam');
const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('.face');
const faceCtx = canvas.getContext('2d');
const faceDetector = new window.FaceDetector();
// write function to populate users vid

async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1920, height: 1080 }
  });
  video.srcObject = stream;
  await video.play();

  // size canvas to be same size as video
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  console.log(video.videoWidth, video.videoHeight);
};

async function detect() {
  const faces = await faceDetector.detect(video);
  //console.log(faces)
  // ask browser when next animation frame is then run detect for us
  faces.forEach(drawFace);
  requestAnimationFrame(detect); // recursion when a function calls itself from within itself

}

function drawFace(face) {
 const {width, height, top, left} = face.boundingBox;
 console.log(width, height, top, left)
}

populateVideo().then(detect);

