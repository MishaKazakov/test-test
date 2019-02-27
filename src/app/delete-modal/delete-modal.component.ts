import { Component, OnInit, Inject, OnChanges } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Person } from "../shared/person";

@Component({
  selector: "app-delete-modal",
  templateUrl: "./delete-modal.component.html",
  styleUrls: ["./delete-modal.component.scss"]
})
export class DeleteModalComponent implements OnInit {
  name = "";

  constructor(
    public dialogRef: MatDialogRef<DeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Person
  ) {}

  ngOnInit() {
    if (this.data) {
      this.name = `${this.data.firstName} ${this.data.lastName}`;
    }
  }

  reject(): void {
    this.dialogRef.close(null);
  }

  confirm(): void {
    this.dialogRef.close(this.data.id);
  }
}
