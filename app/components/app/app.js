import {Component} from 'ng-forward';
import {StateConfig} from '../../decorators/state-config';
import {Home} from '../home/home';
import {About} from '../about/about';

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
@StateConfig([
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'about',
    path: '/about',
    component: About
  }
])
export class App {

}