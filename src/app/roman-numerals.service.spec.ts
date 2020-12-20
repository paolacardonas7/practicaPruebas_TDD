import { TestBed } from '@angular/core/testing';

import { RomanNumeralsService } from './roman-numerals.service';

describe('RomanNumeralsService', () => {
  let service: RomanNumeralsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanNumeralsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('There are no negative Roman numerals', () => {
    expect(service.convertToRomanNumeral(-1)).toEqual('error');
  });

  it('There are no decimals Roman numerals', () => {
    expect(service.convertToRomanNumeral(-1.5)).toEqual('error');
  });

  it('The number 0 has no representation in Roman numerals', () => {
    expect(service.convertToRomanNumeral(0)).toEqual('error');
  });

  it('The number 1 equals I in Roman numerals', () => {
    expect(service.convertToRomanNumeral(1)).toEqual('I');
  });

  it('The number 5 equals V in Roman numerals', () => {
    expect(service.convertToRomanNumeral(5)).toEqual('V');
  });

  it('The number 10 equals X in Roman numerals', () => {
    expect(service.convertToRomanNumeral(10)).toEqual('X');
  });

  it('The number 50 equals L in Roman numerals', () => {
    expect(service.convertToRomanNumeral(50)).toEqual('L');
  });

  it('The number 100 equals C in Roman numerals', () => {
    expect(service.convertToRomanNumeral(100)).toEqual('C');
  });

  it('The number 500 equals D in Roman numerals', () => {
    expect(service.convertToRomanNumeral(500)).toEqual('D');
  });

  it('The number 1000 equals M in Roman numerals', () => {
    expect(service.convertToRomanNumeral(1000)).toEqual('M');
  });

});
