import { ReverseEncoder } from "../reverseEncoder";

describe('ReverseEncoder', () => {
  it('should encode and decode correctly', () => {
    const encoder = new ReverseEncoder();
    expect(encoder.encode('Hello world')).toBe('dliow svool');
    expect(encoder.decode('dliow svool')).toBe('Hello world');
  });

  it('should handle spaces correctly', () => {
    const encoder = new ReverseEncoder();
    expect(encoder.encode('Hello   world')).toBe('dliow   svool');
    expect(encoder.decode('dliow   svool')).toBe('Hello   world');
  });

});