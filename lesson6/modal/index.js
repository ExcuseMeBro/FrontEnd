const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
console.log(modal.classList);
for (let i = 0; i < btnsShowModal.length; i++){
    btnsShowModal[i].addEventListener('click', function (){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}
btnCloseModal.addEventListener('click', function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});
overlay.addEventListener('click', function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');    
});
// TODO Codeni optimallashtiring
// TODO Esc klavishini bosganda modalni yoping!