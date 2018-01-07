import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import * as fromRoot from './reducers';
import { TeamsModule } from './teams/teams.module';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './users/users.module';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {EffectsModule} from '@ngrx/effects';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    MatIconModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(fromRoot.reducers),
    !environment.production ?
      StoreDevtoolsModule.instrument({
        maxAge: 25 // Retains last 25 states
      })
      : [],
    EffectsModule.forRoot([]),
    TeamsModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
