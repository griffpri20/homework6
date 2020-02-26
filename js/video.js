var video;
var volume;

function getVid(){
	video = document.querySelector("#myVideo");
}

function playVid() {
	video.play();
	console.log("Play Video");

	volume = document.querySelector("#volume")
	console.log(volume)
	volume.innerHTML = video.volume * 100 + "%";

}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
	video.playbackRate = video.playbackRate * .8;
  	console.log("Speed is "+video.playbackRate);
}

function increaseSpeed() {
	video.playbackRate = video.playbackRate * 1.25;
	console.log("Speed is "+ video.playbackRate);
}

function skipAhead() {
	video.currentTime += 60;
	if (video.ended){
		video.playbackRate = 1;
		video.currentTime = 0;
	}
	console.log("Current location is "+ video.currentTime);

}

function mute() {
	if (video.muted){
		video.muted = false;
	  	console.log("Unmuted");
		document.querySelector("#mute").innerHTML = "Mute";

	}
	else{
		video.muted = true;
      	console.log("Muted");
		document.querySelector("#mute").innerHTML = "Unmute";
	}
}
//
function changeVolume() {
	let slider = document.querySelector("#volumeSlider");
	console.log("Volume is " + slider.value);	
	video.volume = slider.value / 100;

	volume.innerHTML = (video.volume * 100) + "%";

}


function gray() {
	video.style.filter = "grayscale(100%)";
	console.log("In grayscale")

}

function color() {
	video.style.filter = "grayscale(0%)";
	console.log("In color")
}
