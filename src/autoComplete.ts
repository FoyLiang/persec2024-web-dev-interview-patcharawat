export function autocomplete(search: string, items: string[], maxResults: number): string[] {
  const startsWithSearch = items.filter(item => item.toLowerCase().startsWith(search.toLowerCase()));
  const containsSearch = items.filter(item => item.toLowerCase().includes(search.toLowerCase()) && !item.toLowerCase().startsWith(search.toLowerCase()));
  const results = [...startsWithSearch, ...containsSearch].slice(0, maxResults);
  return results;
}