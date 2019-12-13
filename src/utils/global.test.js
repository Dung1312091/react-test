import {
    sum
} from "./global"
it('sum 2 number', () => {
    const a = sum(1, 2);
    expect(a).toBe(3)
})