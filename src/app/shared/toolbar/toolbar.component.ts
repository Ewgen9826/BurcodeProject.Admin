import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"]
})
export class ToolbarComponent implements OnInit {
  @Output() toggleMenu = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}

  onToggleMenu() {
    this.toggleMenu.emit();
  }
}
