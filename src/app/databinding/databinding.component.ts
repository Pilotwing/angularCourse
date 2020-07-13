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

  onUpdateUserName(event: any) {
    this.allowReset = (this.userName != '') ? true : false;
  }

  onClickResetUserName() {
    this.userName = '';
    this.allowReset = false;
  }

}
