import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hangman-img',
  templateUrl: './hangman-img.component.html',
  styleUrls: ['./hangman-img.component.css']
})
export class HangmanImgComponent implements OnInit {
  imgSrc: string[];
  winSrc: string;
  loseSrc: string;
  @Input() gameEnded: boolean;
  @Input() strikes: number;

  constructor() { }

  ngOnInit() {
    this.imgSrc = [
      '../../../assets/images/hangman-photos/Hangman 1.png',
      '../../../assets/images/hangman-photos/Hangman 2.png',
      '../../../assets/images/hangman-photos/Hangman 3.png',
      '../../../assets/images/hangman-photos/Hangman 4.png',
      '../../../assets/images/hangman-photos/Hangman 5.png',
      '../../../assets/images/hangman-photos/Hangman 6.png',
      '../../../assets/images/hangman-photos/Hangman 7.png'
    ];
    this.winSrc = '../../../assets/images/hangman-photos/yes_symbol.png';
    this.loseSrc = '../../../assets/images/hangman-photos/shit_symbol.png';
  }

}
