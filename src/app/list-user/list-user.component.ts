import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  userList = [];
  constructor() { }

  ngOnInit() {
    this.userList = [{
      name: 'vijay',
      department: 'IT'
    }]
  }

}
