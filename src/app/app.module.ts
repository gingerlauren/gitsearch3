import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
// import {AppRoutingModule} from "./app-routing.module"

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
// import { UsersComponent } from "./components/users/users.component";
import { UsersService } from "./services/users.service";
import { LandingComponent } from "./components/landing/landing.component";
import { HighlightDirective } from './directives/highlight.directive';
// import { DatePipe } from './pipes/date.pipe';

@NgModule({
  declarations: [AppComponent, routingComponents, LandingComponent, HighlightDirective,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
