import { Component } from '@angular/core';
import { RomanNumeralsService } from 'src/app/roman-numerals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TDD';
  value = '1';
  romanNumber = 'I';

  constructor(private service: RomanNumeralsService) { }

  convertToRomanNum(value) {
    this.romanNumber = this.service.convertToRomanNumeral(value);
  }
}
