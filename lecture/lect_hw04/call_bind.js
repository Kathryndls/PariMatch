// function gretting(date) {
//     console.log(`hello ${this.name}б ${date}`);
// }

// const mark = {
//     name: 'mark'
// };
// gretting.call(mark, 23);

// function mul(a, b) {
//     return a*b;
// }

// const double = mul.bind(null, 2); 

// console.log(double(23));

// const cunst = function(url, path) {
//     console.log(`${url}/${path}`);
// };

// const rozetka = cunst.bind(null, `https`);

// rozetka('smart');//https/smart
// rozetka('tv');

// `call_bind

function password(onsuccess, onfail) {
    const theName = prompt(`enter name`);
    if(theName == 'vass') {
        onsuccess();
    } else onfail();
}

const response = {
    successName: 'vass',
    failName: 'Unknow',
    ok: function() {console.log(`${this.successName}, successfuly enetered`);},
    fail: function() {console.log(`Login for $3{this.failName} failed`);}
};

const oks = response.ok.bind(response);
// const fail = response.fail.bind(response);

password(oks, response.fail);

