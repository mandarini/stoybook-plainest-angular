import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'plainest-angular-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.css'],
})
export class MyTestComponent implements OnInit {
  @Input() name: string;
  @Input() age: number;
  @Input() other: boolean;

  constructor() {}

  ngOnInit(): void {}
}
