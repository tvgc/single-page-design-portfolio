const carousel = document.querySelector('.js-carousel');

const buttons = document.querySelectorAll('.js-arrow')

let activeItem = 1;

const carouselItems = document.querySelectorAll('.js-carousel div')

const maxItems = carouselItems.length;

buttons.forEach(button=> {
    button.addEventListener('click', e => {
        const isBtnLeft = button.classList.contains('o-arrow-left')
        
        if (isBtnLeft) {
            activeItem -= 1;
        } else {
            activeItem += 1;
        }

        if (activeItem >= maxItems - 1) {
            activeItem = 1
        }

        if (activeItem < 1) {
            activeItem = maxItems - 2;
        }
        

        carouselItems.forEach(item=> {
            item.classList.remove('is-active')
        });//caso queira estilizar com css eu uso o is-active

        carouselItems[activeItem].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        })

        carouselItems[activeItem].classList.add('is-active')//caso queira estilizar com css eu uso o is-active
    })
})

