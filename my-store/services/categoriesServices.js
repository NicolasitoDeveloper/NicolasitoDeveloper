const faker = require("faker");

class CategoriesService {

  constructor() {
    this.categories = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        category: faker.commerce.productAdjective()
      })
    }
  }

  async create(data) {
    const newCategory = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.categories.push(newCategory);
    return newCategory;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(this.categories);
      }, 5000);
  })
}

  findOne(id) {
    return this.categories.find(category => category.id === id);
  }

  async update(id, changes) {
    const index = this.categories.findIndex(category => category.id === id);
    if (index === -1) {
      throw new Error("Category not found");
    }
    const category = this.products[index];
     this.categories[index] ={
    ...category,
    ...changes
  };
   return this.categories[index];
  }

  async delete(id) {
    const index = this.categories.findIndex(category => category.id === id);
    if (index === -1) {
      throw new Error("Category not found");
    }
    this.categories.splice(index, 1);
    return { id };
  }
}

module.exports = CategoriesService;