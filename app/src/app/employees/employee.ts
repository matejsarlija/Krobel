import { DatePipe } from "@angular/common";

export interface Employee {
    Id: number;
    Name?: string;
    DoB?: DatePipe;
    PhoneNumber?: string;
    Gender?: Gender

}

export enum Gender {
    Male = 'Male',
    Female = 'Female'
}
