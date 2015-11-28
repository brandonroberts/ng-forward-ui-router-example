import 'babelify/polyfill';
import 'reflect-metadata';
import 'angular';
import 'angular-ui-router';
import {bootstrap} from 'ng-forward';
import {App} from './components/app/app';
import config from './config/config';

bootstrap(App, ['ui.router', config.name]);