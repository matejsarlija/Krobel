import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Employee } from "./employee";

@Injectable({
    providedIn: 'root'
})

export class EmployeesService {
    private apiUrl = "https://localhost:7273/api";
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private httpClient: HttpClient) {
    }

    getEmployees(): Observable<Employee[]> {
        return this.httpClient.get<Employee[]>(this.apiUrl + '/employees');
    }

    getEmployee(Id: number): Observable<Employee> {
        return this.httpClient.get<Employee>(this.apiUrl + '/employees/' + Id);
    }

    createEmployee(employee: Employee): Observable<Employee> {
        return this.httpClient.post<Employee>(this.apiUrl + '/employees/', JSON.stringify(employee), this.httpOptions);
      }

    updateEmployee(Id: number, employee: Employee): Observable<Employee> {
        return this.httpClient.put<Employee>(this.apiUrl + '/employees/' + Id, JSON.stringify(employee), this.httpOptions)
    }

    deleteEmployee(Id : number) {
        return this.httpClient.delete<Employee>(this.apiUrl + '/employees/' + Id, this.httpOptions);
    }


}
