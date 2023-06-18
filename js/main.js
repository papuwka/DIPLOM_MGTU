const tooltip = document.querySelector('.tooltip');
const building = document.querySelectorAll('.building');
const popupbg = document.querySelector('.popup__info_bg');
const popup = document.querySelector('.popup__info');
const image = document.querySelector('.map');
const map = document.querySelector('.map');
const floorController = document.querySelector('.menu__link');
const mapImage = document.querySelector('.map__image');
// building.forEach(building =>{
// 	building.addEventListener('click', function(){
// 		alert(this.dataset.title);
// 	});
// });

building.forEach(building => {

		building.addEventListener('click', function(){ // Загрузка модального окна и ивент на его появление
			popup.querySelector('.info__photo').setAttribute('src', this.dataset.photo);
			popup.querySelector('.info__title').innerText = this.dataset.title;
			popup.querySelector('.info__description').innerText = this.dataset.description;
			popup.querySelector('.info__button').setAttribute('href', this.dataset.link);
			popupbg.classList.add('active');
		});

		building.addEventListener('mousemove', function() { // Передача тайтла в тултип
			tooltip.innerText = this.dataset.title;
			tooltip.style.top = (event.y - 100 ) + "px";
			tooltip.style.left = (event.x - 100) + "px";
		});

		building.addEventListener('mouseenter', function(){ // Появляется тултип
			tooltip.style.display = 'block';
		});

		building.addEventListener('mouseleave', function(){ // Убирает тултип если за пределами объекта
			tooltip.style.display = 'none';
		});
});

document.addEventListener('click', (event) => { // Закрытие по клику
	if (event.target === popupbg){
		popupbg.classList.remove('active');
	}
});

document.addEventListener('keydown', (event) => { // Закрытие ESC
	if (event.keyCode === 27){
		popupbg.classList.remove('active');
	}
});

function replaceImageFirst() {
	document.querySelector('.map__image').setAttribute('src', 'images/First_Floor.jpg');
};
function replaceImageSecond() {
	document.querySelector('.map__image').setAttribute('src', 'images/Second_Floor.jpg');
};
function replaceImageThird() {
	document.querySelector('.map__image').setAttribute('src', 'images/Third_Floor.jpg');
};
function replaceImageFour() {
	document.querySelector('.map__image').setAttribute('src', 'images/Four_Floor.jpg');
};
