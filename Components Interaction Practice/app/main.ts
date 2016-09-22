import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MainModule} from './module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(MainModule);
