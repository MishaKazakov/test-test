import { Component, OnInit } from '@angular/core';
import { Person } from './../person';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {

  employees: Person[] = [
    {
      id: 1 ,
      firstName: "Венедикт",
      lastName: "Кручинин",
    },
    {
      id: 2,
      firstName: "Ариадна",
      lastName: "Ковригина",
    },
    {
      id: 3,
      firstName: "Всеслава",
      lastName: "Григорьева",
    },
    {
      id: 4,
      firstName: "Ким",
      lastName: "Вахров",
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  edit(id: number) {

  }

  delete(id: number) {

  }
}
