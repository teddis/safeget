import "source-map-support/register";
import safeget = require("../index");

test('safeget', () => {
    const a = {b: {c: "expected"}};
    expect(safeget(() => a.b.c)).toBe('expected');
});
