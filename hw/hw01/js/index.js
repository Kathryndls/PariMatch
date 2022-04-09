//  all навигация 
// const nav = document.querySelector('.nav');
// const navContainer = document.querySelector('.nav__container');
// const navMain = document.querySelector('.nav__container_main');
// const navCatalog = document.querySelector('.nav__container_catalog');
// console.log(nav);
// console.log(navCatalog);

// // стрелки большого слайдера
// const arrowRightBanner = document.querySelector('.news__product-slider_arrow-right');
// const arrowLeftBanner = document.querySelector('.news__product-slider_arrow-left');

// // стрелки для товаров 
// const arrowLeftGoods = document.querySelector('.slider__arrow-right');
// const arrowRigthGoods = document.querySelector('.slider__arrow-left');

// console.log(arrowLeftGoods);
// console.log(arrowRightBanner);

// // реклама и на нее ссылка 
// // всё 3 рекламы 
// const AllNewsCompany = document.querySelector('.news__list');
// // конкретная реклама 
// const newsCompany = document.querySelector('.news__img');
// console.log(newsCompany);
// console.log(AllNewsCompany);



// NEWS_SLIDER
// let slideIndex = 1;

// const slides = document.querySelectorAll('.offer__slide'),
//     slider = document.querySelector('.offer__slider'),
//     prev = document.querySelector('.offer__slider-prev'),
//     next = document.querySelector('.offer__slider-next'),
//     total = document.querySelector('#total'),
//     current = document.querySelector('#current'),
//     slidesWrapper = document.querySelector('.offer__slider-wrapper'),
//     width = window.getComputedStyle(slidesWrapper).width,
//     slidesField = document.querySelector('.offer__slider-inner');

// if (slides.length < 10) {
//     total.textContent = `0${slides.length}`;
//     current.textContent =  `0${slideIndex}`;
// } else {
//     total.textContent = slides.length;
//     current.textContent =  slideIndex;
// }

// 


// const slides = document.querySelectorAll('.news__product_slide');
const slides = [
    {
        img: 'https://homy.ru/upload/images/carousel_02.jpg',
        url: 'voip_equipment.html'
    },
    {
        img: 'https://homy.ru/upload/images/carousel_slide1.jpg',
        url: 'voip_equipment.html'
    },
    {
        img: 'https://homy.ru/upload/images/carousel_slaĭdy2.jpg',
        url: 'voip_equipment.html'
    }
];
const slider = document.querySelector('.news__product_slider');
const prev = document.querySelector('.news__product-slider_prew');
const next = document.querySelector('.news__product-slider_next');
const slidesWrapper = document.querySelector('.news__product_slider-wrapper');
const slidesField = document.querySelector('.news__product_slider-inner');
const width = window.getComputedStyle(slidesWrapper).width;
let slideIndex = 1;
let offset = 0;

slidesField.style.width = 100 * slides.length + '%';
slidesField.style.display = 'flex';
slidesField.style.transition = '1s all';

slidesWrapper.style.overflow = 'hidden';
slidesWrapper.style.width = width;

slides.forEach(item => {
    const slide = document.createElement('div');
    slide.classList.add('news__product_slide');
    slide.style.width = width;
    slide.innerHTML = ` 
        <a href="../pages/${item.url}">
            <img src="${item.img}" alt="Bg_img">
        </a>
    `;
    slidesField.append(slide);  
});

next.addEventListener('click', () => {
    if (offset === +width.slice(0, width.length - 2) * (slides.length - 1)) {
        offset = 0;
    } else {
        offset += +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;
});

prev.addEventListener('click', () => {
    if (offset === 0) {
        offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
        offset -= +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;
});

// /////////////
const catalog = document.querySelector('.catalog');
const catalogMenu = document.querySelector('.catalog__menu');

catalog.addEventListener('click', () => {
    catalogMenu.style.display = 'block';
});



// nav__container_main.classList

// slider.style.position = 'relative';

// slidesField.style.width = 100 * slides.length + '%';
// slidesField.style.display = 'flex';
// slidesField.style.transition = '0.5s all';

// slidesWrapper.style.overflow = 'hidden';

// slides.forEach(slide => {
//     slide.style.width = width;
// });

// slider.style.position = 'relative';

// const indicators = document.createElement('ol'),
//     dots = [];
// indicators.classList.add('carousel-indicators');
// indicators.style.cssText = `
//     position: absolute;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     z-index: 15;
//     display: flex;
//     justify-content: center;
//     margin-right: 15%;
//     margin-left: 15%;
//     list-style: none;
// `; // Если хотите - добавьте в стили, но иногда у нас нет доступа к стилям
// slider.append(indicators);

// for (let i = 0; i < slides.length; i++) {
//     const dot = document.createElement('li');
//     dot.setAttribute('data-slide-to', i + 1);
//     dot.style.cssText = `
//         box-sizing: content-box;
//         flex: 0 1 auto;
//         width: 30px;
//         height: 6px;
//         margin-right: 3px;
//         margin-left: 3px;
//         cursor: pointer;
//         background-color: #fff;
//         background-clip: padding-box;
//         border-top: 10px solid transparent;
//         border-bottom: 10px solid transparent;
//         opacity: .5;
//         transition: opacity .6s ease;
//     `;
//     if (i == 0) {
//         dot.style.opacity = 1;
//     }
//     indicators.append(dot);
//     dots.push(dot);
// }

// next.addEventListener('click', () => {
//     if (offset == (deleteNotDigits(width) * (slides.length - 1))) {
//         offset = 0;
//     } else {
//         offset += deleteNotDigits(width); 
//     }

//     slidesField.style.transform = `translateX(-${offset}px)`;

//     if (slideIndex == slides.length) {
//         slideIndex = 1;
//     } else {
//         slideIndex++;
//     }

//     if (slides.length < 10) {
//         current.textContent =  `0${slideIndex}`;
//     } else {
//         current.textContent =  slideIndex;
//     }

//     dots.forEach(dot => dot.style.opacity = ".5");
//     dots[slideIndex-1].style.opacity = 1;
// });

// prev.addEventListener('click', () => {
//     if (offset == 0) {
//         offset = deleteNotDigits(width) * (slides.length - 1);
//     } else {
//         offset -= deleteNotDigits(width);
//     }

//     slidesField.style.transform = `translateX(-${offset}px)`;

//     if (slideIndex == 1) {
//         slideIndex = slides.length;
//     } else {
//         slideIndex--;
//     }

//     if (slides.length < 10) {
//         current.textContent =  `0${slideIndex}`;
//     } else {
//         current.textContent =  slideIndex;
//     }

//     dots.forEach(dot => dot.style.opacity = ".5");
//     dots[slideIndex-1].style.opacity = 1;
// });

// dots.forEach(dot => {
//     dot.addEventListener('click', (e) => {
//         const slideTo = e.target.getAttribute('data-slide-to');

//         slideIndex = slideTo;
//         offset = deleteNotDigits(width) * (slideTo - 1);

//         slidesField.style.transform = `translateX(-${offset}px)`;

//         if (slides.length < 10) {
//             current.textContent =  `0${slideIndex}`;
//         } else {
//             current.textContent =  slideIndex;
//         }

//         dots.forEach(dot => dot.style.opacity = ".5");
//         dots[slideIndex-1].style.opacity = 1;
//     });
// });

// function deleteNotDigits(str) {
//     return +str.replace(/\D/g, '');
// }