import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeLayoutComponent } from "./layout/home-layout/home-layout.component";
import { AuthLayoutComponent } from "./layout/auth-layout/auth-layout.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "auth",
    pathMatch: "full"
  },
  {
    path: "auth",
    component: AuthLayoutComponent,
    loadChildren: () =>
      import("./modules/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "home",
    component: HomeLayoutComponent,
    loadChildren: () =>
      import("./modules/product/product.module").then(m => m.ProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
