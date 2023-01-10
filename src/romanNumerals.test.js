import { covertNumbertoRomanNumerals } from "./romanNumerals";

describe("covertNumbertoRomanNumerals", () => {
  test("returns roman numerals with input as number", () => {
    expect(covertNumbertoRomanNumerals(2)).toBe("II");
  });
  test("returns roman numerals with input as number", () => {
    expect(covertNumbertoRomanNumerals(4)).toBe("IV");
  });
  test("returns roman numerals with input as number", () => {
    expect(covertNumbertoRomanNumerals(5)).toBe("V");
  });
   test("returns roman numerals with input as number", () => {
     expect(covertNumbertoRomanNumerals(7)).toBe("VII");
   });
    test("returns roman numerals with input as number", () => {
      expect(covertNumbertoRomanNumerals(9)).toBe("IX");
    });
     test("returns roman numerals with input as number", () => {
       expect(covertNumbertoRomanNumerals(6)).toBe("VI");
     });
      test("returns roman numerals with input as number", () => {
        expect(covertNumbertoRomanNumerals(27)).toBe("XXVII");
      });
     test("returns roman numerals with input as number", () => {
       expect(covertNumbertoRomanNumerals(39)).toBe("XXXIX");
     });
     test("returns roman numerals with input as number", () => {
       expect(covertNumbertoRomanNumerals(465)).toBe("CDLXV");
     });
      test("returns roman numerals with input as number", () => {
        expect(covertNumbertoRomanNumerals(1555)).toBe("MDLV");
      });
});
