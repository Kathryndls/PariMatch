const users = require('../array');

users.sort((a, b) => {
    return Date.parse(b.registrationDate) - Date.parse(a.registrationDate);
});

users.forEach(user => {
    console.log({
        id: user.id,
        name: user.name,
        username: user.username,
        registrationDate: user.registrationDate
    });
});