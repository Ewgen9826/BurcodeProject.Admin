import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./material.module";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ToolbarComponent, SidenavComponent],
  imports: [CommonModule, MaterialModule, FlexLayoutModule, FormsModule],
  exports: [
    FormsModule,
    MaterialModule,
    ToolbarComponent,
    SidenavComponent,
    FlexLayoutModule
  ]
})
export class SharedModule {}
