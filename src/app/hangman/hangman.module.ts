import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { HangmanComponent } from './hangman.component';
import { CapLetterComponent } from './cap-letter/cap-letter.component';
import {  HangmanImgComponent } from './hangman-img/hangman-img.component';
import { BetLettersComponent } from './letters-to-display/letters-to-display.component';
import { SingleLetterComponent } from './letters-to-display/single-letter/single-letter.component';

@NgModule({
  declarations: [
    HangmanComponent,
    CapLetterComponent,
    HangmanImgComponent,
    BetLettersComponent,
    SingleLetterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
      HangmanComponent
  ],
  providers: [],
})
export class HangmanModule { }
