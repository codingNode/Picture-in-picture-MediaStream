const videoElement = document.getElementById('video');
const startBtn = document.getElementById('button-start');

async function selectMediaScreen()
{
    try
    {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        
        videoElement.srcObject = mediaStream;

        videoElement.onloadedmetadata = () =>{
            videoElement.play();
            
        }
    }
    catch(err)
    {
        console.log(err)
    }
}

startBtn.addEventListener('click', async ()=>{
    startBtn.disabled = true;
    await videoElement.requestPictureInPicture();
    startBtn.disabled = false;

});

selectMediaScreen()