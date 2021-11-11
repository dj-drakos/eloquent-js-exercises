const { generatePyramid } = require('../programStructure.js');

const log = jest.spyOn(console, 'log').mockImplementation();

describe('tests functions for Program Structure Exercises', () => {
  beforeEach(() => {
    log.mockClear();
  });
  afterAll(() => {
    log.mockRestore();
  });

  it('generatePyramid takes in a string and logs an ASCII pyramid of that string in the console.', () => {
    generatePyramid('#');
    expect(console.log).toBeCalledTimes(7);
    expect(console.log).toHaveBeenLastCalledWith('#######');
  });
});

