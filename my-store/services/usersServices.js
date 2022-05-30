const faker = require("faker");

class UsersService {

  constructor() {
    this.users = [];
    this.generate();
  }

  async generate() {
    const limit = 20;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        avatar: faker.image.imageUrl(),
        city: faker.address.cityName(),
        email: faker.internet.email(),
      })
    }
  }

  async create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.user.push(newUser);
    return newUser;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(this.users);
      }, 5000);
    })
  }

  findOne(id) {
    return this.users.find(user => user.id === id);
  }

  async update(id, changes) {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) {
      throw new Error("User not found");
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes
    };
    return this.users[index];
  }

  async delete(id) {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) {
      throw new Error("User not found");
    }
    this.users.splice(index, 1);
    return { id };
  }

}

module.exports = UsersService;
