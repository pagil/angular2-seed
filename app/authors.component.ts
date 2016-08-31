import {Component} from 'angular2/core'

@Component({
  selector: 'authors',
  template: `
    <h2>Authors</h2>
    {{titile}}
  `
})

export class AuthorsComponent {
  title = 'Title for the authors page'
}
