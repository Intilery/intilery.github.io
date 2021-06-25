import {TimeScale} from './timescale'

test('Q3 2021', () => {
    const timescale = new TimeScale(new Date(24, 6, 2021));
    expect(timescale.getCompletionQuarter(2)).toBe("Q3 2021");
});
