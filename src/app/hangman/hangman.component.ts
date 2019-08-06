import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../core/data.service';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent implements OnInit {
  movieName: string;
  strikes: number;
  gameEnded: boolean;
  clueLetters: string[] = [];
  guessedLetters: string[] = [];
  betLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'
          , 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  stillInBank = {
    A: true, B: true, C: true, D: true,
    E: true, F: true, G: true, H: true,
    I: true, J: true, K: true, L: true,
    M: true, N: true, O: true, P: true,
    Q: true, R: true, S: true, T: true,
    U: true, V: true, W: true, X: true,
    Y: true, Z: true,
  };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.startAgain();
  }

  clickOnLetter(letter: string) {
    if (!this.gameEnded && this.stillInBank[letter]) {
      this.stillInBank[letter] = false;
      if (this.movieName.includes(letter)) {
        this.guessedLetters.push(letter);
        this.gameEnded = this.checkWin();
      } else {
        this.strikes++;
        this.gameEnded = this.strikes > 5;
      }
    }
  }

  checkWin() {
    for (const letter of this.movieName) {
      if (!this.guessedLetters.includes(letter) && !this.clueLetters.includes(letter) && letter !== ' ') {
        return false;
      }
    }
    return true;
  }

  chooseClueLetters() {
    const numOfLetter = this.movieName.length;
    let numOfCoosen = 0;
    let tempMovieName = this.movieName;
    let choosen: string;
    while (numOfCoosen < numOfLetter / 4) {
      choosen = tempMovieName.charAt(Math.floor(Math.random() * tempMovieName.length));
      for (const i of tempMovieName) {
        if (i === choosen) {
          tempMovieName = tempMovieName.slice(0, tempMovieName.indexOf(i)) + tempMovieName.slice(tempMovieName.indexOf(i) + 1);
          numOfCoosen++;
        }
      }
      this.clueLetters.push(choosen);
      this.stillInBank[choosen] = false;
    }
  }

  startAgain() {
    this.gameEnded = false;
    this.clueLetters = [];
    this.guessedLetters = [];
    this.betLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'
    , 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    this.stillInBank = {
      A: true, B: true, C: true, D: true,
      E: true, F: true, G: true, H: true,
      I: true, J: true, K: true, L: true,
      M: true, N: true, O: true, P: true,
      Q: true, R: true, S: true, T: true,
      U: true, V: true, W: true, X: true,
      Y: true, Z: true,
    };
    this.dataService.getMovie()
      .subscribe((movie: string) => {
        this.movieName = movie.toUpperCase();
        this.chooseClueLetters();
      });
    this.strikes = 0;
  }
}
