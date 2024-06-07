import { customSort } from "../sortingArray";

describe('customSort', () => {
  it('should sort alphabetically and then by number', () => {
    const input = ["TH19", "SG20" , "TH2"];
    const expectedOutput = [ "SG20" , "TH2", "TH19"];
    expect(customSort(input)).toEqual(expectedOutput);
  });

  it('should sort alphabetically and then by number 2', () => {
    const input = ["TH10", "TH3Netflix" , "TH1", "TH7"];
    const expectedOutput = ["TH1", "TH3Netflix" , "TH7", "TH10"];
    expect(customSort(input)).toEqual(expectedOutput);
  });

  it('should handle empty input', () => {
    expect(customSort([])).toEqual([]);
  });

});