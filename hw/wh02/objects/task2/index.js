const users = require('../array');

function getUser(id) {
    if (id && typeof id === 'number') {
        users.forEach(item => {
            if (item.id === id) {
                console.log(item.name);
            }
        });
    } else if (!id) {
        users.forEach(item => {
            console.log(item.name);
        });
    } else if (typeof id !== 'number') {
        console.error('Error!');
    }
}

getUser(2);
