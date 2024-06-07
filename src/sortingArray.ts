export function customSort(arr: string[]): string[] {
  return arr.slice().sort((a, b) => {
    const aMatch = a.match(/^([a-zA-Z]+)(\d*)([a-zA-Z]*)$/);
    const bMatch = b.match(/^([a-zA-Z]+)(\d*)([a-zA-Z]*)$/);
    if (!aMatch || !bMatch) return 0;

    const aAlpha = aMatch[1];
    const bAlpha = bMatch[1];
    const aNum = parseInt(aMatch[2], 10) || 0;
    const bNum = parseInt(bMatch[2], 10) || 0;
    const aSuffix = aMatch[3];
    const bSuffix = bMatch[3];

    if (aAlpha !== bAlpha) {
      return aAlpha.localeCompare(bAlpha);
    } else if (aNum !== bNum) {
      return aNum - bNum;
    } else if (aSuffix !== bSuffix) {
      return aSuffix.localeCompare(bSuffix);
    } else {
      return 0;
    }
  });
}