// 1
// btn.onclick = () => {
//     console.log('yes');
// };

// 2 навешивание обработчика через дом. foobar в консоле до нажатия на кнопку. бред
// const fooBar = () => {
//     console.log('foobar');
// };

// btn.onclick = fooBar();

// 3 зиз внутри функции
// btn.onclick = function () {
//     console.log(this);
// };

// 4 одну и ту же функцию присваиваем другому елем
// function clickHandler() {
//     console.log(this);
// }

// btn.onclick =  clickHandler;
// heading.onclick = clickHandler;

// 5  аналогичен 4 заданию, но в стрелочной фунции
// const clickHandler = (event) => {
//     console.log(event.target);
// };

// btn.onclick =  clickHandler;
// heading.onclick = clickHandler;

// 6 при курсоре изменяет
// const mouseOverHandler = (event) => {
//     event.target.innerHTML = 'one';
// };
// const mouseOutHandler = (event) => {
//     event.target.innerHTML = 'two';
// };

// btn.onmouseover = mouseOverHandler;
// btn.onmouseout = mouseOutHandler;

//  // eddEventListener
// 1. нажатие на кнопку и в консоли слово btn
// const eventType = 'click';

// const clickHandler = () => console.log('btn');
// btn.addEventListener(eventType, clickHandler);

// 2. событие работает 1 раз изза options - once;
// const eventType = 'click';
// const clickHandler = () => console.log('btn');
// const options = {
//     once: true,
// };

// btn.addEventListener(eventType, clickHandler, options);

// 3. событие работает click';
// const eventType = (event) => {
//     event.preventDefault();
//     console.log('was cliked');
// };

// const options = {
//     pasive: true,
// };

// anchor.addEventListener(event, clickHandler, options);

// 4. событие работает как обычное событие но capture проходит фазы события
// const eventType = 'click';
// const clickHandler = () => console.log('btn');

// const options = {
//     capture: true,
// };

// btn.addEventListener(eventType, clickHandler, options);

// 5 на кнопку навесили несколько событий
// const firstClickHandler = () =>
// console.log('one click');
// const secondClickHandler = () =>
// console.log('second click');

// btn.addEventListener('click', firstClickHandler);
// btn.addEventListener('click', secondClickHandler);

// 6
const mouseOverHandler = (event) => {
    x.innerText = event.clientX;
    y.innerText = event.clientY;
};

addBtn.addEventListener('click', () => {
    document.addEventListener('mousemove', mouseOverHandler);
});

removeBtn.addEventListener('click', () => {
    document.removeEventListener('mousemove', mouseOverHandler);
});

// 7. всплытие
