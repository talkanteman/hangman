import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-letters-to-display',
  templateUrl: './letters-to-display.component.html',
  styleUrls: ['./letters-to-display.component.css']
})
export class BetLettersComponent implements OnInit {
  private _movieName: string;
  @Input() clueLetters: string[];
  @Input() guessedLetters: string[] = [];
  movieNameByLetter: string[][] = [];
  @Input() get movieName(): string {
    return this._movieName;
  }
  set movieName(movieName: string) {
    if (movieName) {
      this._movieName = movieName;
      this.movieNameByLetter = [];
    }
    for (const word of this._movieName.split(' ')) {
      this.movieNameByLetter.push(word.split(''));
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
