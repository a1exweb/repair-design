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

    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');
    next.css('left', prev.width() + 10 + bullets.width() + 10);
    bullets.css('left', prev.width() + 10);

    // Validation form
    $('.modal__form').validate({
        errorElement: "div",
        errorClass: "invalid",
        rules: {
            // simple rule, converted to {required:true}
            userName: {
                required: true,
                minlength: 2,
                maxlength: 32
            },
            // compound rule
            userPhone: {
                required: true,
                minlength: 17
            },
            userEmail: {
                required: true,
                email: true
            }
        },
        messages: {
            userName: {
                required: "Заполните поле Имя",
                minlength: "Минимиальная длина имени {0} символа",
                maxlength: "Максимальная длина имени {0} символа"
            },
            userPhone: {
                required: "Заполните поле Телефон",
                minlength: "Введите корректный Телефон",
            },
            userEmail: {
                required: "Заполните поле Email",
                email: "Введите корректный Email"
            }
        }
    });

    $('.control__form').validate({
        errorElement: "div",
        errorClass: "control__invalid",
        rules: {
            // simple rule, converted to {required:true}
            userName: {
                required: true,
                minlength: 2,
                maxlength: 32
            },
            // compound rule
            userPhone: {
                required: true,
                minlength: 17
            },
            userEmail: {
                required: true,
                email: true
            }
        },
        messages: {
            userName: {
                required: "Заполните поле Имя",
                minlength: "Минимиальная длина имени {0} символа",
                maxlength: "Максимальная длина имени {0} символа"
            },
            userPhone: {
                required: "Заполните поле Телефон",
                minlength: "Введите корректный Телефон",
            }
        }
    });

    $('.footer__form').validate({
        errorElement: "div",
        errorClass: "footer__invalid",
        rules: {
            // simple rule, converted to {required:true}
            userName: {
                required: true,
                minlength: 2,
                maxlength: 32
            },
            // compound rule
            userPhone: {
                required: true,
                minlength: 17
            },
            userQuestion: {
                required: true,
                minlength: 15
            }
        },
        messages: {
            userName: {
                required: "Заполните поле Имя",
                minlength: "Минимиальная длина имени {0} символа",
                maxlength: "Максимальная длина имени {0} символа"
            },
            userPhone: {
                required: "Заполните поле Телефон",
                minlength: "Введите корректный Телефон",
            },
            userQuestion: {
                required: "Заполните поле Вопрос",
                minlength: "Минимиальная длина вопроса {0} символов",
            }
        }
    });
    // Mask for Phone
    $('input[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7(___) ___-__-__"});
});