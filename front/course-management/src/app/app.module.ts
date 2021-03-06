import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { CursosModule } from './cursos/cursos.module';
import { RouteReuseStrategy } from '@angular/router';
import { RouteReusableStrategy } from './RouteReusableStrategy';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    CursosModule
  ],
  providers: [AuthService
    ,
    { provide: RouteReuseStrategy, useClass: RouteReusableStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
