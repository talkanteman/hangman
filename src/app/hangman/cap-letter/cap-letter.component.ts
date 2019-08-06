import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cap-letter',
  templateUrl: './cap-letter.component.html',
  styleUrls: ['./cap-letter.component.css']
})

export class CapLetterComponent implements OnInit {
  @Input() letter: string;
  @Input() display: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
