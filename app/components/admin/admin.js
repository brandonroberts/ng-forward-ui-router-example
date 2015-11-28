import {Component} from 'ng-forward';
import {StateConfig} from '../../decorators/state-config';
import {Dashboard} from '../dashboard/dashboard';

@Component({
  selector: 'admin',
  template: 'Admin <div ui-view></div>',
  providers: [Dashboard]
})
@StateConfig([
  {
    name: 'dashboard',
    path: '/dashboard',
    component: Dashboard
  }
])
export class Admin {

}