/*
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
*/
$(document).ready(function () {
    const modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    showModal = () => {
        modal.addClass('modal_visible');
    },
    hideModal = () => {
        modal.removeClass('modal_visible');
    },
    closeBtn = $('.modal__close');
    modalBtn.on('click', showModal);
    closeBtn.on('click', hideModal);
    $(window).on('click', function (event) {
        if (event.target == modal[0]) {
            hideModal();
        }
    });
    $(document).on('keydown', function (event) {
        if (event.code == 'Escape') {
            hideModal();
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.page-up').fadeIn().css('display', 'flex');
        } else {
            $('.page-up').fadeOut();
        }
    });

    $('.page-up').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});