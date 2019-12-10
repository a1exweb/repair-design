document.addEventListener("DOMContentLoaded", function (event) {
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal');
    const showModal = () => { 
        modal.classList.add('modal_visible');
    };
    const hideModal = () => {
        modal.classList.remove('modal_visible');
    }
    const closeBtn = document.querySelector('.modal__close');
    modalBtn.forEach(element => {
        element.addEventListener('click', showModal);
    });
    closeBtn.addEventListener('click', hideModal);
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            hideModal();
        }
    });
    document.addEventListener('keydown', function (event) {
        if (event.code == 'Escape') {
            hideModal();
        }
    });
});