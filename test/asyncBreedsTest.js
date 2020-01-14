const assert = require('chai').assert;
const breedDetailsFromFile = require('../asyncBreeds');

describe('#breedDetailsFromFile', () => {
  it('returns breed details for the Bombay breed of sweet, precious kittens', (done) => {
    breedDetailsFromFile('Bombay', (bombay) => {
      const expectedDesc = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
      assert.equal(expectedDesc, bombay);
      done(); 
    });
  });
  it('returns breed details for the Balinese breed of soft, cuddly, perfect kittens', (done) => {
    breedDetailsFromFile('Balinese', (balinese) => {
      const expectedDesc = "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.";
      assert.equal(expectedDesc, balinese);
      done(); 
    });
  });
  it('returns undefined for a breed that does not exist', (done) => {
    breedDetailsFromFile('haleycat', (haleycat) => {
      const expectedDesc = undefined;
      assert.equal(expectedDesc, haleycat);
      done();
    });
  });
});