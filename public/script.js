const btn = document.getElementById('hamburger');
const menu1 = document.getElementById('menu1');
const menu2 = document.getElementById('menu2');
const menu3 = document.getElementById('menu3');
const overlay = document.getElementById('overs');
const overlays = document.getElementById('overlay');
const close = document.getElementById('closebox');
const lightbox = document.querySelector('.lightbox');
const transition = document.querySelectorAll('.fluid');
const faded = document.getElementsByClassName('fade');
const container = document.getElementsByClassName('imgContainer')
const containerImg = document.createElement('img');
var currentImage = 1;

console.log(lightbox);

// const over = document.getElementById('over');
btn.addEventListener('click', () => {
	menu1.classList.toggle('open')
	menu2.classList.toggle('open')
	menu3.classList.toggle('open')
	overlays.classList.toggle('hidden')
	overlays.classList.toggle('width')

})

btn.addEventListener('click', () => {
	menu1.classList.toggle('bg-white')
	menu2.classList.toggle('bg-white')
	menu3.classList.toggle('bg-white')
	menu1.classList.toggle('bg-black')
	menu2.classList.toggle('bg-black')
	menu3.classList.toggle('bg-black')
})

close.addEventListener('click', () => {
	lightbox.classList.add('hidden')
})



function fade() {
	transition.forEach((e) => {
		e.style.width = "100%";
	})
}

function openLightbox() {
	lightbox.classList.toggle('hidden')
}

transition.forEach (image => {
	image.addEventListener('click', e => {
	 overlay.src = image.src;
	 // currentImage = Array.from(transition).indexOf(fade);
	})
})

function openLightbox() {
	lightbox.classList.toggle('hidden')
}

function prevImage() {
	currentImage--;
	if (currentImage < 0) {
		currentImage = transition.length - 1;
	}
	overlay.src = transition[currentImage].src;
}

function nextImage() {
	currentImage++;
	if (currentImage >= transition.length) {
		currentImage = 0;
	}
	overlay.src = transition[currentImage].src;
	// setInterval(nextImage, 10000);
}

console.log(transition[currentImage].src);




