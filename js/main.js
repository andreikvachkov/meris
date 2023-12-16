const accordionHeaders = document.querySelectorAll('.accordion__header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionMain = header.nextElementSibling;
        accordionMain.classList.toggle('show');
        const icon = header.querySelector('.accordion__icon');

        if (accordionMain.classList.contains('show')) {
            icon.src = 'img/minus.svg';
        } else {
            icon.src = 'img/plus.svg';
            
        }
    });
});

const reasonsBtn = document.querySelectorAll('.reasons__item__face--front');

reasonsBtn.forEach(header => {
    header.addEventListener('click', () => {
        const accordionMain = header.nextElementSibling;
        accordionMain.classList.toggle('show');
        const icon = header.querySelector('.reasons__ico');

        if (accordionMain.classList.contains('show')) {
            icon.src = 'img/minus_mobile.svg';
        } else {
            icon.src = 'img/plus_mobile.svg';
            
        }
    });
});

const toggleButtonOpen = document.querySelector('.humburger__btn');
const toggleButtonClose = document.querySelector('.mobile_menu__btn__wrap button');
const hiddenBlock = document.querySelector('.mobile_menu');

toggleButtonOpen.addEventListener('click', function() {
    hiddenBlock.classList.add('active');
});

toggleButtonClose.addEventListener('click', function() {
    hiddenBlock.classList.remove('active');
});

function flipCard(card) {
    card.parentElement.classList.toggle('flipped');
}

function toggleAccordion(item) {
    if (window.innerWidth > 768) {
        item.classList.toggle('flipped');
    }
}

const productItems = document.querySelectorAll('.product-table__item');
const imagePreview = document.querySelector('.image-preview');

productItems.forEach(item => {
    const link = item.dataset.image;

    item.addEventListener('mouseover', function(event) {
        
            const image = new Image();
            image.src = link;

            imagePreview.style.display = 'block';
            imagePreview.style.top = `${event.clientY - 100}px`;
            imagePreview.style.left = `${event.clientX + 20}px`;

            imagePreview.innerHTML = '';
            imagePreview.appendChild(image);
        
    });

    item.addEventListener('mouseout', function() {
        imagePreview.style.display = 'none';
    });
});