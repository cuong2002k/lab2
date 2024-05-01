const { v4 } = require("uuid");

const mapContacts = (contact) => {
    const { name, phone, cell, email, picture } = contact;

    return {
        id: v4(),
        name: name.first + " " + name.last,
        cell,
        phone,
        email,
        avatar: picture.large,
        favorite: Math.random() > 0.5,
    }
}

const fetchContacts = async () => {
    const response = await fetch('https://randomuser.me/api/?results=100&seed=fullstackio');
    const data = await response.json();
    return data.results.map(mapContacts);
}

const fetchUserContact = async () => {
    const response = await fetch('https://randomuser.me/api/?seed=fullstackio');
    const data = await response.json();
    return mapContacts(data.results[0]);
}

const fetchRandomContact = async () => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    return mapContacts(data.results[0]);
}

export { fetchContacts, fetchUserContact, fetchRandomContact }