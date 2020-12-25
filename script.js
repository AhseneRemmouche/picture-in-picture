const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log('Oooops an error here: ', error);
  }
}

button.addEventListener('click', async () => {
  //Disable button
  button.disabled = true;
  //Start Picture in Picture mode
  await videoElement.requestPictureInPicture();
  //Reset button
  button.disabled = false;
});

//on Load
selectMediaStream();
