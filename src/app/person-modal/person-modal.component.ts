import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Person } from "../shared/person";

@Component({
  selector: "app-person-modal",
  templateUrl: "./person-modal.component.html",
  styleUrls: ["./person-modal.component.scss"]
})
export class PersonModalComponent implements OnInit {
  person: Person = new Person();
  modalTitle = "Содание";
  buttonName = "Создать";

  constructor(
    public dialogRef: MatDialogRef<PersonModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Person
  ) {}

  ngOnInit() {
    if (this.data) {
      this.person = this.data;
      this.modalTitle = "Редактирование";
      this.buttonName = "Изменить";
    }
  }

  reject(): void {
    this.dialogRef.close(null);
  }

  confirm(): void {
    this.dialogRef.close(this.person);
  }
}
