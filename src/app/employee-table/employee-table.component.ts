import { Component, OnInit } from "@angular/core";
import { Person } from "../shared/person";
import { PersonService } from "../shared/services/person.service";
import { ModalService } from "./../shared/services/modal.service";

@Component({
  selector: "app-employee-table",
  templateUrl: "./employee-table.component.html",
  styleUrls: ["./employee-table.component.scss"]
})
export class EmployeeTableComponent implements OnInit {
  employees: Person[];
  displayedColumns: string[] = ["avatar", "firstName", "lastName", "actions"];

  constructor(
    private personService: PersonService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.getPersons();
  }

  getPersons() {
    this.personService.getPersons().then(persons => {
      if (persons) {
        this.employees = persons;
      }
    });
  }

  create() {
    this.modalService.createPerson().then(newPerson => {
      if (newPerson) {
        this.employees.push(newPerson);
        this.employees = this.employees.map(employee => employee);
      }
    });
  }

  edit(person: Person) {
    this.modalService.editPerson(person).then((editedPerson: Person) => {
      if (editedPerson) {
        this.employees = this.employees.map(employee => {
          if (employee.id === editedPerson.id) {
            return editedPerson;
          }
          return employee;
        });
      }
    });
  }

  delete(person: Person) {
    const personId = person.id;
    this.modalService.deletePerson(person).then(res => {
      if (res) {
        this.employees = this.employees.filter(
          employee => employee.id !== personId
        );
      }
    });
  }
}
