import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-letter',
  templateUrl: './single-letter.component.html',
  styleUrls: ['./single-letter.component.css']
})
export class SingleLetterComponent implements OnInit {
  @Input() letter: string;
  @Input() isGuessed: boolean;

  constructor() { }

  ngOnInit() {
  }

}
