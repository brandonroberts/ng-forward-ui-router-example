import {Component, StateConfig} from 'ng-forward';
import {Account} from '../account/account';
import {Profile} from '../profile/profile';

@Component({
  selector: 'users',
  template: `
    User
    <a ui-sref="users.account">Account</a> | <a ui-sref="users.profile">Profile</a>
    <hr>
    <div ui-view></div>
    `
})
@StateConfig([
  { url: '/profile', component: Profile, name: 'users.profile' },
  { url: '/account', component: Account, name: 'users.account' }
])
export class Users {

}