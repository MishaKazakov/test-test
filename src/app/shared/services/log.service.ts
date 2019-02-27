import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Injectable({
  providedIn: "root"
})
export class LogService {
  constructor(private snackBar: MatSnackBar) {}

  log(message) {
    this.snackBar.open(message, null, {
      duration: 2000
    });
  }
}
