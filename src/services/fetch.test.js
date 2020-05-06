import { fetchList } from './fetch';

describe('rick and morti api', () => {
  it('can fetch a list of characters', () => {
    // like window
    // eslint-disable-next-line no-undef
    global.fetch = () => Promise.resolve({
      json: () => Promise.resolve({
        results: [
          {
            name: 'test 1',
            description: 'random 1',
            image: 'https://image1.png'
          },
          {
            name: 'test 2',
            description: 'random 2',
            image: 'https://vignette.wikia.nocookie.net/x-files/images/e/e5/Maxresdefault.jpg/revision/latest/scale-to-width-down/180?cb=20180322223652'
          }
        ]
      })
    });

    return fetchList()
      .then(list => {
        expect(list).toEqual([
          {
            name: 'test 1',
            description: 'random 1',
            image: 'https://image1.png'
          },
          {
            name: 'test 2',
            description: 'random 2',
            image: 'http://www.placecage.com/c/200/300'
          }
        ]);
      });
  });
});
