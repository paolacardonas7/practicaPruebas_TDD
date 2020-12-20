import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RomanNumeralsService {
  constructor() { }

  convertToRomanNumeral(number): string {
    if (number < 1 || !Number.isInteger(number)) {
      return 'Please enter a positive integer';
    }

    var romanNumerals = [
      'I',
      'V',
      'X',
      'L',
      'C',
      'D',
      'M',
      '(V)',
      '(X)',
      '(L)',
      '(C)',
      '(D)',
      '(M)',
    ];
    var romanNumeral = '';
    var narray = String(number).split('').reverse();
    var parser = function (item, index) {
      switch (item) {
        case '0':
        case '1':
        case '2':
        case '3':
          romanNumeral =
            new Array(Number(item) + 1).join(romanNumerals[index * 2]) +
            romanNumeral;
          break;
        case '4':
          romanNumeral =
            romanNumerals[index * 2] +
            romanNumerals[index * 2 + 1] +
            romanNumeral;
          break;
        case '5':
        case '6':
        case '7':
        case '8':
          romanNumeral =
            romanNumerals[index * 2 + 1] +
            new Array(Number(item) - 4).join(romanNumerals[index * 2]) +
            romanNumeral;
          break;
        case '9':
          romanNumeral =
            romanNumerals[index * 2] +
            romanNumerals[index * 2 + 2] +
            romanNumeral;
          break;
      }
    };
    narray.forEach(parser);
    return romanNumeral;
  }
}
