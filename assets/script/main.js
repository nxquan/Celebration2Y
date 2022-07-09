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

window.onload = e => {
	document.getElementById('audio').play();
}