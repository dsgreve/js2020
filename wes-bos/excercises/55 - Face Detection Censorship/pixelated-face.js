// The face detection does not work on all browsers and operating systems.

// If you are getting a `Face detection service unavailable` error or similar,
// it's possible that it won't work for you at the moment.

const video = document.querySelector('.webcam');
const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext("2d");
// faceDetector is a experimental feature and needs to be turned on in browser setttings about:flags -> experimental browser features
const faceDetector = new window.FaceDetector();
const optionsInputs = document.querySelectorAll(
  '.controls input[type="range"]'
);

const options = {
  SIZE: 10,
  SCALE: 1.35,
};

function handleOption(event) {
  const { value, name } = event.currentTarget;
  options[name] = parseFloat(value);
}

optionsInputs.forEach((input) => input.addEventListener('input', handleOption));

// write function to populate users vid
async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 }
  });
  video.srcObject = stream;
  await video.play();

  // size canvas to be same size as video
  console.log(video.videoWidth, video.videoHeight);
  canvas.width = video.videoWidth ;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
  // console.log(video.videoWidth, video.videoHeight);
};

async function detect() {
  const faces = await faceDetector.detect(video);

  // ask browser when next animation frame is then run detect for us
  faces.forEach(drawFace);
  faces.forEach(censor);
  requestAnimationFrame(detect); // recursion when a function calls itself from within itself

}

function drawFace(face) {
  const { width, height, top, left } = face.boundingBox;
  // console.log({ width, height, top, left });
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#ffc600";
  ctx.lineWidth = 2;
  ctx.strokeRect(left, top, width, height);
}

function censor({ boundingBox: face }) {
  faceCtx.imageSmoothingEnabled = false;
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
  // First draw it small
  faceCtx.drawImage(
    video, // Where should I grab the photo from?
    face.x, // from what x and y should I start capturing from?
    face.y,
    face.width, // how wide and high should I capture from?
    face.height,
    face.x, // now to draw it, where should I start x and y?
    face.y,
    options.SIZE, // how wide and high should it be?
    options.SIZE
  );
  // then draw it back on, but scaled up
  const width = face.width * options.SCALE;
  const height = face.height * options.SCALE;

  faceCtx.drawImage(
    faceCanvas, // Where should I grab the photo from?
    face.x, // from what x and y should I start capturing from?
    face.y, // from what x and y should I start capturing from?
    options.SIZE,
    options.SIZE,
    // Drawing args
    face.x - (width - face.width) / 2,
    face.y - (height - face.height) / 2,
    width,
    height
  );
}




populateVideo().then(detect);

