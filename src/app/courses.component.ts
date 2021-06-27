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
          <td [attr.colspan]="colSpan"></td> //here is a way to convert an DOM object to Http and use his properties
        </tr>
      </table>
    `
  })
  export class CoursesComponent{
    title = "List of Courses";
    courses;

    imgUrlBindBraces = "http://lorempixel.com/400/200/";
    imgUrlBindProperty = "http://lorempixel.com/400/200/"; // remember that html and DOM(the rendered page here) can have differences in his properties

    colSpan = 2;

    constructor(service: CoursesService) {
      this.courses = service.getCourses();
    }
  }
  