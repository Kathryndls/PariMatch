const template = /^[0-9]{3}\s[0-9]{3}-[0-9]{2}-[0-9]{2}/;

const user = {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    registrationDate: "Mon, 11 Jan 2021 12: 28: 18 + 0000",
    address:
    {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo:
        {
            lat: "-43.9509",
            lng: "-34.4618"
        }
    },
    phone: "050 877-77-77",
    website: "anastasia.net",
    company:
    {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
    },

    set phoneNumber(num) {
        if (num.match(template)) {
        this.phone = num;
        console.log(`Номер телефона был изменён на: ${this.phone}`);
        console.log(this);
        } else {
        console.error('Некорректный номер телефона!');
        }
    }
};


user.phoneNumber = "050 877-77-77";
user.phoneNumber = "050 8777777";
user.phoneNumber = "invalid input";

