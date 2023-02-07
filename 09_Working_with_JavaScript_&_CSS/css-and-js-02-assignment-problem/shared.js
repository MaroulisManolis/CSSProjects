var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var selectModalButtonNegative = document.querySelector('.modal__actions button');
var backdrop = document.querySelector('.backdrop');

// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
    selectModalButtonNegative.addEventListener('click', function() {
        modal.style.display = 'none';
        backdrop.style.display = 'none';
    });
    backdrop.addEventListener('click', function() {
        backdrop.style.display = 'none';
        modal.style.display = 'none';
    });
}
