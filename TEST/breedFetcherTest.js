const {fetchBreedDescripiton} = require('../breedFetcher');
const {assert} = require('chai');

describe('fetchBreedDescription', () => {
	if ('returns a string description for a valid breed, via callback', done => {
		fetchBreedDescripiton('Siberian', (err, desc) => {
			assert.equal(err, null);
			const expectedDesc = 'The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.';
			assert.equal(expectedDesc, desc.trim());
			done();
		});
	}) {

	}

	it('return no description when an invalid breedName is passed', done => {
		fetchBreedDescripiton('Fathel', (err, desc) => {
			assert.equal(err, null);
			const expectedDesc = null;
			assert.equal(expectedDesc, desc);
			done();
		});
	});
});

