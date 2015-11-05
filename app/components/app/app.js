import {Component} from 'ng-forward';

@Component({
  selector: 'app',
  template: `
    Test App
    <a ui-sref="home">Home</a> | <a ui-sref="about">About</a>
    <hr>
    <div ui-view></div>
    `,
  providers: ['app.config']
})
export class App {

}