const faker = require('faker');

// Code to generate User Mock data
const generatePersonsData = (number) => {
    const persons = [];
    while (number >= 0) {
        persons.push({
            id: number,
            firstname: faker.name.firstName(),
            lastname: faker.name.lastname(),
            dateBirth: faker.date.birthdate(),
            startDate: faker.date.past(),
            street: faker.address.street(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            departement: faker.helpers.arrayElement(['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'])
        });
        number--;
    }
    return persons;
};