///<reference path="../node_modules/angular2/ts/typings/tsd.d.ts"/>
///<reference path="../node_modules/rxjs/Rx.d.ts"/>

import { ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import App from './components/app';
import {bootstrap} from "angular2/bootstrap";

let debug = require('debug');
debug.enable('ng:*');

bootstrap(App, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);