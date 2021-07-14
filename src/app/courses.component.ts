import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `
      <h2>{{ title }}</h2>
      <ul>
        <li *ngFor="let course of courses">
          {{ course }}
        </li>
      </ul>
      <img src="{{ imgUrlBindBraces }}"/>
      <img [src]="imgUrlBindProperty"/>

      <table>
        <tr>
          <td [attr.colspan]="colSpan"></td> <!-- here is a way to convert an DOM object to Http and use his properties -->
        </tr>
      </table>

      <button class="btn btn-primary" [class.active]="true">Save</button> <!-- can bind class using active and others -->
      <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button> <!-- can bind style using active and others for DOM style properties -->

      <button (click)="onSave($event)">Save</button>

      <input (keyup.enter)="onKeyUp()"> <!-- filtering event by keys pressed -->

      <input #email (keyup.enter)="onKeyUp2(email.value)"> <!-- ao inves de enviar evento como parametro usa template variables que referencia o campo de input -->
    
      <input [(ngModel)]="emailEx" (keyup.enter)="onKeyUp3()"> <!-- recebe o valor com o campo pre inicializado, alterando conforme input usando forms module -->
      `
  })
  export class CoursesComponent{
    title = "List of Courses";
    courses;

    imgUrlBindBraces = "http://lorempixel.com/400/200/";
    imgUrlBindProperty = "http://lorempixel.com/400/200/"; // remember that html and DOM(the rendered page here) can have differences in his properties

    colSpan = 2;

    isActive = false;

    onSave($event: any) {
      console.log("Button was clicked", $event);
    }

    onKeyUp() {
      console.log("ENTER was pressed");
    }

    onKeyUp2(email: any) {
      console.log(email);
    }

    emailEx = "me@example.com";
    onKeyUp3() {
      console.log(this.emailEx);
    }

    constructor(service: CoursesService) {
      this.courses = service.getCourses();
    }
  }
  