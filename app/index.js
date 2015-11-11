import 'babelify/polyfill';
import 'reflect-metadata';
import 'angular';
import 'angular-ui-router';
import {bootstrap} from 'ng-forward';
import {App} from './components/app/app';
import {Home} from './components/home/home';
import {About} from './components/about/about';
import {configStates} from './config/config';

bootstrap(App, ['ui.router', Home, About, configStates(App).name]);