const faker = require("faker");

class UsersService {

  constructor(){
    this.users = [];
    this.generate();
  }

  generate() {
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

  create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.user.push(newUser);
    return newUser;
  }

  find() {
    return this.users;
  }

  findOne(id) {
    return this.users.find(user => user.id === id);
  }

  update(id, changes) {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) {
      throw new Error("Product not found");
    }
    const user = this.users[index];
     this.users[index] ={
    ...user,
    ...changes
  };
   return this.users[index];
  }

  delete(id) {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) {
      throw new Error("Product not found");
    }
    this.users.splice(index, 1);
    return { id };
  }

}

module.exports = UsersService;
