import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";
import { AuthLayoutComponent } from "./layout/auth-layout/auth-layout.component";
import { HomeLayoutComponent } from "./layout/home-layout/home-layout.component";
import { AuthModule } from "./modules/auth/auth.module";

@NgModule({
  declarations: [AppComponent, AuthLayoutComponent, HomeLayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
