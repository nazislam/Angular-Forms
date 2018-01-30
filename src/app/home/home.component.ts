import {Component} from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
    languages: string[] = ['English', 'Spanish', 'Others'];
    model = new Employee('', '', false, 'default');
    hasPrimaryLanguageError = false;
    validatePrimaryLanguage(event) {
        if (this.model.primaryLanguage === 'default') {
            this.hasPrimaryLanguageError = true;
        } else {
            this.hasPrimaryLanguageError = false;
        }
    }
}
/*
    firstNameToUpperCase(value: string): void {
        if (value.length > 0) {
            this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            this.model.firstName = value;
        }
    }
*/


