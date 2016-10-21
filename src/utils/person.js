import faker from 'faker';
import uuid from 'node-uuid';
import random from './random';

export const createPerson = () => ({
  id: uuid.v4(),
  email: faker.internet.email(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  age: random.integer(15, 50),
  gender: random.pick(['M', 'F']),
  height: random.integer(150, 250),
});
