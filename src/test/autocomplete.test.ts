import { autocomplete } from '../autoComplete';

describe('autocomplete', () => {
  it('should return an array of strings that match the search query', () => {
    const search = 'th';
    const items = ['Mother', 'Think', 'Worthy', 'Apple', 'Android'];
    const maxResults = 2;
    const result = autocomplete(search, items, maxResults);
    expect(result).toEqual(['Think', 'Mother']);
  });

  it('should return an array of strings that match the search query', () => {
    const search = 'Ap';
    const items = ['Mother', 'Think', 'Worthy', 'Apple', 'Android'];
    const maxResults = 3;
    const result = autocomplete(search, items, maxResults);
    expect(result).toEqual(['Apple']);
  });

  it('should return an empty array if no matches are found', () => {
    const search = 'xyz';
    const items = ['Mother', 'Think', 'Worthy', 'Apple', 'Android'];
    const maxResults = 2;
    const result = autocomplete(search, items, maxResults);
    expect(result).toEqual([]);
  });
});