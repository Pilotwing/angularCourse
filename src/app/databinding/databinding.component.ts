import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  allowReset = false;
  userName = ''
  constructor() { }

  ngOnInit(): void {
  }

  onResetUserName() {
    this.userName = '';
  }

}
