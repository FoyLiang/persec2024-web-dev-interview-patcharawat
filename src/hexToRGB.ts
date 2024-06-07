interface IRgbColor {
  r: number,
  g: number,
  b: number
}

export function hexToRGB(hex: string): IRgbColor | Error {
  hex = hex.trim();
  if (hex.length === 4 || hex.length === 7) {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
  } else {
    throw new Error("Invalid hex color format");
  }

  const rHex = parseInt(hex.substring(0, 2), 16);
  const gHex = parseInt(hex.substring(2, 4), 16);
  const bHex = parseInt(hex.substring(4, 6), 16);
  return { r: rHex, g: gHex, b: bHex };
}
