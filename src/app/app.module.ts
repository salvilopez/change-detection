import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgZoneComponent } from './components/ng-zone/ng-zone.component';
import { DetachComponent } from './components/detach/detach.component';
import { OnPushComponent } from './components/on-push/on-push.component';
import { RettachComponent } from './components/rettach/rettach.component';
import { AsyncPipeComponent } from './components/async-pipe/async-pipe.component';
import { DataList } from './providers/data/data-list.provider';
import { RandomData } from './providers/data/random-data.provider';
import { FormsModule } from '@angular/forms';
import { UserFactorialComponent } from './components/user-factorial/user-factorial.component';
import { PeticionAsyncComponent } from './components/peticion-async/peticion-async.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NgZoneComponent,
    DetachComponent,
    OnPushComponent,
    RettachComponent,
    AsyncPipeComponent,
    UserFactorialComponent,
    PeticionAsyncComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    //Datos para los ejemplos
    DataList,
    RandomData
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
