
// АНИМАЦИЯ ИДЁТ ОДНОВРЕМЕННО 

const redCirclePromise = new Promise((resolve, reject) => {
    const root = document.querySelector('.root');
    const redCircle = document.createElement('div');
    redCircle.classList.add('circle', 'circle__red');

    const destRedCircle = document.createElement('div');
    destRedCircle.classList.add('circle', 'target', 'target__red');

    root.append(redCircle, destRedCircle);

    setTimeout(() => {
        redCircle.style.top = '250px';
        resolve('Red circle works!');
        // reject(new Error('Red circle does not work!'))
    }, 1000);
});
redCirclePromise
    .then(resolve => console.log(resolve))
    .catch(error => console.error(error));

const blueCirclePromise = new Promise((resolve, reject) => {
    const root = document.querySelector('.root');
    const blueCircle = document.createElement('div');
    blueCircle.classList.add('circle', 'circle__blue');

    const destBlueCircle = document.createElement('div');
    destBlueCircle.classList.add('circle', 'target', 'target__blue');

    root.append(blueCircle, destBlueCircle);

    setTimeout(() => {
        blueCircle.style.top = '250px';
        blueCircle.style.left = '400px';
        resolve('Blue circle works!');

        // reject(new Error('Blue circle does not work!'))
    }, 1000); // or 2000 for delay
});
blueCirclePromise
    .then(resolve => console.log(resolve))
    .catch(error => console.error(error));

const greenCirclePromise = new Promise((resolve, reject) => {
    const root = document.querySelector('.root');
    const greenCircle = document.createElement('div');
    greenCircle.classList.add('circle', 'circle__green');

    const destGreenCircle = document.createElement('div');
    destGreenCircle.classList.add('circle', 'target', 'target__green');

    root.append(greenCircle, destGreenCircle);

    setTimeout(() => {
        greenCircle.style.left = '400px';
        resolve('Green circle works!');

        // reject(new Error('Green circle does not work!'))
    }, 1000); // or 3000 for animation in turn
});
greenCirclePromise
    .then(resolve => console.log(resolve))
    .catch(error => console.error(error));

Promise.all([redCirclePromise, blueCirclePromise, greenCirclePromise])
    .then(
        () => {
            const root = document.querySelector('.root');
            const likeImg = document.createElement('img');
            likeImg.classList.add('like-img');
            likeImg.setAttribute('src', './like.png');
            likeImg.setAttribute('alt', 'Work!');

            setTimeout(() => {
                root.append(likeImg)
                likeImg.style.display = 'block';
                console.log('WORK!');
            }, 2500); 
        },
        () => console.error('One or some circles do not work!')
    );


    // АНИМАЦИЯ ИДЁТ ПО ОЧЕРЕДИ 

// const greenCirclePromise = new Promise((resolve, reject) => {
//     const root = document.querySelector('.root');
//     const greenCircle = document.createElement('div');
//     greenCircle.classList.add('circle', 'circle__green');

//     const destGreenCircle = document.createElement('div');
//     destGreenCircle.classList.add('circle', 'target', 'target__green');

//     root.append(greenCircle, destGreenCircle);

//     setTimeout(() => {
//         greenCircle.style.left = '400px';
//         resolve('Green circle works!');

//         // reject(new Error('Green circle does not work!'))
//     }, 3000); // or 3000 for animation in turn
// });
// greenCirclePromise
//     .then(resolve => console.log(resolve))
//     .catch(error => console.error(error));

// const blueCirclePromise = new Promise((resolve, reject) => {
//     const root = document.querySelector('.root');
//     const blueCircle = document.createElement('div');
//     blueCircle.classList.add('circle', 'circle__blue');

//     const destBlueCircle = document.createElement('div');
//     destBlueCircle.classList.add('circle', 'target', 'target__blue');

//     root.append(blueCircle, destBlueCircle);

//     setTimeout(() => {
//         blueCircle.style.top = '250px';
//         blueCircle.style.left = '400px';
//         resolve('Blue circle works!');

//         // reject(new Error('Blue circle does not work!'))
//     }, 2000); // or 2000 for delay
// });
// blueCirclePromise
//     .then(resolve => console.log(resolve))
//     .catch(error => console.error(error));

//     const redCirclePromise = new Promise((resolve, reject) => {
//         const root = document.querySelector('.root');
//         const redCircle = document.createElement('div');
//         redCircle.classList.add('circle', 'circle__red');
    
//         const destRedCircle = document.createElement('div');
//         destRedCircle.classList.add('circle', 'target', 'target__red');
    
//         root.append(redCircle, destRedCircle);
    
//         setTimeout(() => {
//             redCircle.style.top = '250px';
//             resolve('Red circle works!');
//             // reject(new Error('Red circle does not work!'))
//         }, 1000);
//     });
//     redCirclePromise
//         .then(resolve => console.log(resolve))
//         .catch(error => console.error(error));
    

// Promise.all([redCirclePromise, blueCirclePromise, greenCirclePromise])
//     .then(
//         () => {
//             const root = document.querySelector('.root');
//             const likeImg = document.createElement('img');
//             likeImg.classList.add('like-img');
//             likeImg.setAttribute('src', './like.png');
//             likeImg.setAttribute('alt', 'Work!');

//             setTimeout(() => {
//                 root.append(likeImg)
//                 likeImg.style.display = 'block';
//                 console.log('WORK!');
//             }, 2500); 
//         },
//         () => console.error('One or some circles do not work!')
//     );

module.exports = redCirclePromise;
module.exports = blueCirclePromise;
module.exports = greenCirclePromise;