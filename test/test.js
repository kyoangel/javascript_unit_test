describe('Fixed Tests', () => {
    it('test lots words', () => {
        expect(reverseWords('The quick brown fox jumps over the lazy dok.')).toBe('ehT kciuq nworb xof spmuj revo eht yzal .kod');
    });

    it('test single word', () => {
        expect(reverseWords('apple')).toBe('elppa');
    });

    it('test single char words', () => {
        expect(reverseWords('a b c d')).toBe('a b c d');
    });

    it('test double space separate words', () => {
        expect(reverseWords('double  spaced  words')).toBe('elbuod  decaps  sdrow');
    });
});