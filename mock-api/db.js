const faker = require("faker");

module.exports = function () {
    const data = {
        tasks: [],
        bookmarks: [],
        history: [],
        users: [],
        badges: [
            "UP TO DATE",
            "NEEDS REVIEW",
            "PROPOSED",
            "UNDER REVIEW",
            "PENDING APPROVAL",
            "APPROVED",
        ],
        user: {},
    };

    const status = ["To Do", "In Progress", "On Hole", "Done"];

    for (let i = 0; i < 6; i++) {
        data.users.push({
            id: faker.datatype.uuid(),
            name: faker.name.firstName(),
            profile: faker.image.avatar(),
        });
    }

    const randomUser = faker.random.arrayElement(data.users);
    data.user = {
        id: randomUser.id,
        name: randomUser.name,
        profile: randomUser.profile,
    };

    for (let i = 0; i < 5; i++) {
        data.history.push({
            id: faker.datatype.uuid(),
            Text: `simple history text ${i}`,
            user: faker.random.arrayElement(data.users).id,
            time: faker.date.past().getTime(),
        });
    }

    for (let i = 0; i < 3; i++) {
        data.bookmarks.push({
            id: faker.datatype.uuid(),
            title: faker.lorem.sentence(),
            user: faker.random.arrayElement(data.users).id,
            text: faker.lorem.paragraph(),
            time: faker.date.past().getTime(),
        });
    }

    for (let i = 0; i < 20; i++) {
        data.tasks.push({
            id: faker.datatype.uuid(),
            badge: faker.random.arrayElement(data.badges),
            status: faker.random.arrayElement(status),
            user: faker.random.arrayElement(data.users).id,
            time: faker.date.past().getTime(),
            title: faker.lorem.sentence(),
            text: faker.lorem.paragraphs(),
            note: faker.lorem.paragraph(),
        });
    }

    return data;
};
