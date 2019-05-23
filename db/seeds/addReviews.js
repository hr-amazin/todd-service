const faker = require('faker'); 

const createFakeReview = () => ({ 
  uuid: Math.floor(Math.random() * (1100 - 1000 + 1) + 1000), 
  revTitle: faker.lorem.sentence(), 
  revName: faker.name.findName(), 
  revBody: faker.lorem.paragraph(), 
  revDate: faker.date.past(), 
  stars: Math.floor(Math.random() * 6)
});

exports.seed = function(knex, Promise) { 

  const fakeReviews = []; 
  const maxFakeReviews = 1000; 

  for (let i = 0; i < maxFakeReviews; i ++) { 
    fakeReviews.push(createFakeReview()); 
  }
  // Deletes ALL existing entries
  return knex('review')
    .insert(fakeReviews)
};

