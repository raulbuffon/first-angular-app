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

      <input (keyup.enter)="onKeyUp()">
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

    constructor(service: CoursesService) {
      this.courses = service.getCourses();
    }
  }
  