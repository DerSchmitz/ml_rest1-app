import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// opt in  Formular-Modul? - additional Metadata
import {FormsModule} from'@angular/forms';
// opt in http-clientModul
import { HttpClientModule } from '@angular/common/http';

// import external service
import { SubmitService } from './submit.service';

import { AppComponent } from './app.component';
// import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // deklariere dass FormsModule wirklich als Teil des NodeModuls geladen werden soll
    FormsModule,
    HttpClientModule
    //AppRoutingModule
  ],
  providers: [SubmitService,
/* */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
