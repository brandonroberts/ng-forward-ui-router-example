import {Component, StateConfig} from 'ng-forward';
import {Home} from '../home/home';
import {About} from '../about/about';
import {Users} from '../users/users';

@Component({
  selector: 'app',
  template: `
    Test App
    <a ui-sref="home">Home</a> | <a ui-sref="about">About</a> | <a ui-sref="users.profile({id: 123 })">Profile</a>
    <hr>
    <div ui-view></div>
    `,
  providers: ['app.config']
})
@StateConfig([
  { url: '/', component: Home, name: 'home' },
  { url: '/about', component: About, name: 'about' },
  { url: '/users/:id', component: Users, name: 'users' }
])
export class App {

}