import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./components/landing/landing.component";
import { UsersComponent } from "./components/users/users.component";

const routes: Routes = [
  { path: "users", component: UsersComponent },
  { path: "", component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [UsersComponent, LandingComponent];
