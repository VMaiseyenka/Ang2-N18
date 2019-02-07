import { Injectable } from '@angular/core';

@Injectable()
export class GeneratorService {

  private chars: string[] = [];

  constructor() {
    this.initChars();
   }

  generate(n: number): string {
    const result = [];
    for (let i = 0; i < n; i++) {
      const index = Math.floor(Math.random() * this.chars.length);
      const char = this.chars[index];
      result.push(char);
    }
    return result.join('');
  }

  private initChars() {
    const codes = [
      { start: 48, end: 58 }, // 0-9
      { start: 65, end: 91 }, // A-Z
      { start: 97, end: 122 } // a-z
    ];

    this.chars = [];
    codes.forEach(pair => {
      for (let i = pair.start; i < pair.end; i++) {
        this.chars.push(String.fromCharCode(i));
      }
    });
  }
}
