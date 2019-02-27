import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { MaterialModule } from "./material/material.module";
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmployeeTableComponent } from "./employee-table/employee-table.component";
import { PersonModalComponent } from "./person-modal/person-modal.component";
import { DeleteModalComponent } from "./delete-modal/delete-modal.component";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeTableComponent,
    PersonModalComponent,
    DeleteModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [PersonModalComponent, DeleteModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
