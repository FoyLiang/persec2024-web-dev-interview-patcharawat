import { hexToRGB } from "../hexToRGB";

describe('hexToRGB', () => {
  it('should convert a hexadecimal color to RGB', () => {
    expect(hexToRGB('#FF9933')).toEqual({ r: 255, g: 153, b: 51 });
    expect(hexToRGB('#ff9933')).toEqual({ r: 255, g: 153, b: 51 });
    expect(hexToRGB('#FFF')).toEqual({ r: 255, g: 255, b: 255 });
    expect(hexToRGB('#000')).toEqual({ r: 0, g: 0, b: 0 });
  });

  it('should throw an error if the input is not a valid hexadecimal color format', () => {
    expect(() => hexToRGB('')).toThrow('Invalid hex color format');
    expect(() => hexToRGB('#TEST')).toThrow('Invalid hex color format');
    expect(() => hexToRGB('#error')).toThrow('Invalid hex color format');
  });
});