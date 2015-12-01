import {Component, Inject, Resolve} from 'ng-forward';

@Component({
  selector: 'users-account',
  template: 'Account'
})
@Inject('accountData', 'auth')
export class Account {
  @Resolve('accountData')
  static accountData($q) {
    return $q((resolve) => {
      resolve('resolved account data');
    })
  }

  constructor(accountData, auth) {
    console.log(accountData);
    console.log(auth);
  }
}