import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {DtoComponent} from './dto.component';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
    <courses></courses>
    <authors></authors>
    <dto></dto>`,
    directives: [CoursesComponent, AuthorsComponent, DtoComponent]
})
export class AppComponent { }
