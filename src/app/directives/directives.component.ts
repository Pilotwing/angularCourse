import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  // styleUrls: ['./directives.component.css']
  styles: [`
  .log {
    color: white;
  }`]
})
export class DirectivesComponent implements OnInit {
  displayed = true;
  clickLogs = [];
  countClick = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onClick () {
    this.displayed = !this.displayed;
    this.clickLogs.push(this.countClick++ + " " + new Date());
  }
}