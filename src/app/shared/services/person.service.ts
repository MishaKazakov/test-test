import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { LogService } from "./log.service";
import { Person } from "../person";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class PersonService {
  personUrl: string = "http://localhost:3000/persons";

  constructor(private httpClient: HttpClient, private logger: LogService) {}

  getPersons(): Promise<Person[]> {
    return new Promise(resolve => {
      this.httpClient.get<Person[]>(this.personUrl).subscribe(persons => {
        if (persons) {
          resolve(persons);
        } else {
          resolve(null);
        }
      }),
        err => this.logger.log("Произошла ошибка");
    });
  }

  updatePerson(person: Person): Observable<Person> {
    if (person) {
      return this.httpClient.put<Person>(
        `${this.personUrl}/${person.id}`,
        person,
        httpOptions
      );
    }
  }

  createPerson(person: Person): Observable<Person> {
    return this.httpClient.post<Person>(this.personUrl, person, httpOptions);
  }

  deletePerson(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.personUrl}/${id}`);
  }
}
