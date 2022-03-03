import { DatePipe } from "@angular/common";

export interface Employee {
    id: number;
    name?: string;
    doB?: DatePipe;
    phoneNumber?: string;
    employeeGender?: Gender

}

export enum Gender {
    Male = 'Male',
    Female = 'Female'
}
