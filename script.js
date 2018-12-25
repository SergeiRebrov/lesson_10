let modal = document.querySelector('.modal'); //получаем модальное окно 
let show = document.querySelector('#modal-show'); //получаем кнопку "Show"
let hide = document.querySelector('#modal-hide'); //получаем кнопку "Hide"

//функция (скрыть окно) - добавляем класс
function Hide(){
	modal.classList.add('hide');
};

//функция (показать окно) - удаляем класс
function Show(){
	modal.classList.remove('hide');
};

show.onclick = Show; //событие на кнопке ('показать')
hide.onclick = Hide; //событие на кнопке ('скрыть')




document.addEventListener("keypress",keypress, false); 

function keypress(e) {
var keyCode = e.which;
    console.log(e, keyCode, e.which)
    if (keyCode == 97) {
				console.log("You pressed a! and close window(add class Hide)");
				modal.classList.add('hide');
		}
	};