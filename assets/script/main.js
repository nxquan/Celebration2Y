const modal = document.getElementById("modal");
const modalImage = document.querySelector(".modal-img");
const photos = document.querySelectorAll(".photo-item");
const closeModalBtn = document.querySelector(".modal-close");

modal.onclick = (e) => {
	Object.assign(modal.style, {
		opacity: '0',
		visibility: 'hidden'
	})
};
photos.forEach((photo) => {
	photo.onclick = (e) => {
		Object.assign(modal.style, {
			opacity: '1',
			visibility: 'visible'
		})
		modalImage.src = photo.src;
	};
});

modalImage.onclick = (e) => {
	e.stopPropagation();
};
closeModalBtn.onclick = (e) => {
	Object.assign(modal.style, {
		opacity: '0',
		visibility: 'hidden'
	})
};
const audio = document.getElementById('audio')
const audioBtn = document.querySelector('.audio-btn');
const audioPlayIcon = document.querySelector('.audio-play')
const audioPauseIcon = document.querySelector('.audio-pause')

let isPlaying = false;

audioBtn.onclick = e => {
	if(isPlaying) {
		audio.pause()
	}else{
		audio.play()
	}
	isPlaying = !isPlaying
	if(isPlaying) {
		audioBtn.classList.add('playing')
	}else{
		audioBtn.classList.remove('playing')
	}
}