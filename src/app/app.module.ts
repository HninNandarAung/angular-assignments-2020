import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MytestComponent } from './mytest/mytest.component';
import { Mytest1Component } from './mytest1/mytest1.component';
import { Mytest2Component } from './mytest2/mytest2.component';
import { Mytest3Component } from './mytest3/mytest3.component';
import { Mytest4Component } from './mytest4/mytest4.component';
import { Mytest5Component } from './mytest5/mytest5.component';
import { Mytest6Component } from './mytest6/mytest6.component';
import { Mytest7Component } from './mytest7/mytest7.component';
import { Mytest8Component } from './mytest8/mytest8.component';
import { Mytest9Component } from './mytest9/mytest9.component';

@NgModule({
  declarations: [
    AppComponent,
    MytestComponent,
    Mytest1Component,
    Mytest2Component,
    Mytest3Component,
    Mytest4Component,
    Mytest5Component,
    Mytest6Component,
    Mytest7Component,
    Mytest8Component,
    Mytest9Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
