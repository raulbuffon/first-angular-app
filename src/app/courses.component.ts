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
      <img [src]="imgUrlBindParameter"/>
    `
  })
  export class CoursesComponent{
    title = "List of Courses";
    courses;

    imgUrlBindBraces = "http://lorempixel.com/400/200/";
    imgUrlBindParameter = "http://lorempixel.com/400/200/";

    constructor(service: CoursesService) {
      this.courses = service.getCourses();
    }
  }
  