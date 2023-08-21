import { isValid } from "./valid-parenthesis";

describe('Valid Parenthesis', () => {
    test('Valid Parenthesis', () => {
        expect(isValid('()')).toBe(true)
        expect(isValid('()[]{}')).toBe(true);
        expect(isValid('(]')).toBe(false);
        expect(isValid('(())([{}()]{})')).toBe(true);
    });
});
