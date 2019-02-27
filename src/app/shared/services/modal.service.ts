import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material";

import { PersonModalComponent } from "../../person-modal/person-modal.component";
import { DeleteModalComponent } from "../../delete-modal/delete-modal.component";
import { PersonService } from "./person.service";
import { Person } from "../person";
import { LogService } from "./log.service";

@Injectable({
  providedIn: "root"
})
export class ModalService {
  constructor(
    public dialog: MatDialog,
    private personService: PersonService,
    private logger: LogService
  ) {}

  createPerson(): Promise<Person> {
    const dialogRef = this.dialog.open(PersonModalComponent, {
      restoreFocus: false
    });

    return new Promise(resolve =>
      dialogRef.afterClosed().subscribe(
        modalResult => {
          if (modalResult) {
            this.personService
              .createPerson(modalResult)
              .subscribe((person: Person) => {
                this.logger.log(
                  `${person.firstName} ${person.lastName} создан`
                );
                resolve(person);
              });
          } else {
            resolve(null);
          }
        },
        err => this.logger.log("Произошла ошибка")
      )
    );
  }

  editPerson(person: Person): Promise<Person> {
    const dialogRef = this.dialog.open(PersonModalComponent, {
      data: { ...person },
      restoreFocus: false
    });

    return new Promise(resolve =>
      dialogRef.afterClosed().subscribe(
        modalResult => {
          if (modalResult) {
            this.personService
              .updatePerson(modalResult)
              .subscribe(serviceResult => {
                this.logger.log("Сотрудник изменен");
                resolve(serviceResult);
              });
          } else {
            resolve(null);
          }
        },
        err => this.logger.log("Произошла ошибка")
      )
    );
  }

  deletePerson(person: Person): Promise<boolean> {
    const personName = `${person.firstName} ${person.lastName}`;
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      data: { ...person },
      restoreFocus: false
    });

    return new Promise(resolve =>
      dialogRef.afterClosed().subscribe(
        modalResult => {
          if (modalResult) {
            this.personService
              .deletePerson(modalResult)
              .subscribe(serviceResult => {
                const isDeleted = Object.keys(serviceResult).length === 0;
                this.logger.log(`${personName} удален`);
                resolve(isDeleted);
              });
          } else {
            resolve(null);
          }
        },
        err => this.logger.log("Произошла ошибка")
      )
    );
  }
}
