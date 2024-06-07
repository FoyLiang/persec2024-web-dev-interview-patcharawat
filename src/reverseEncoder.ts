export class ReverseEncoder {
  private static alphabet = 'abcdefghijklmnopqrstuvwxyz';

  public encode(input: string): string {
    const words = input.split(' ');
    const encodedWords = words.map(word => {
      return word.split('').map(c => {
        const index = ReverseEncoder.alphabet.indexOf(c.toLowerCase());
        if (index === -1) return c;
        return ReverseEncoder.alphabet[ReverseEncoder.alphabet.length - index - 1];
      }).join('');
    });
    return encodedWords.reverse().join(' ');
  }

  public decode(input: string): string {
    const words = input.split(' ');
    const decodedWords = words.reverse().map(word => {
      return word.split('').map(c => {
        const index = ReverseEncoder.alphabet.indexOf(c.toLowerCase());
        if (index === -1) return c;
        return ReverseEncoder.alphabet[ReverseEncoder.alphabet.length - index - 1];
      }).join('');
    });
    return decodedWords.map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word.toLowerCase();
      }
    }).join(' ');
  }
}