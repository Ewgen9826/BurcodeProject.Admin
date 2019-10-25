import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [
    {
      name: "Isocore Black Ops",
      producerName: "Body Plus International",
      producerLink: "producerLink",
      taste: "taste1",
      priceWithoutTax: 1,
      priceOneOfPretein: 2,
      remarks: "remarks1"
    },
    {
      name: "Isocore Black Ops",
      producerName: "Body Plus International",
      producerLink: "producerLink",
      taste: "taste1",
      priceWithoutTax: 1,
      priceOneOfPretein: 2,
      remarks: "remarks1"
    },
    {
      name: "Isocore Black Ops",
      producerName: "Body Plus International",
      producerLink: "producerLink",
      taste: "taste1",
      priceWithoutTax: 1,
      priceOneOfPretein: 2,
      remarks: "remarks1"
    },
    {
      name: "Isocore Black Ops",
      producerName: "Body Plus International",
      producerLink: "producerLink",
      taste: "taste1",
      priceWithoutTax: 1,
      priceOneOfPretein: 2,
      remarks: "remarks1"
    },
    {
      name: "Isocore Black Ops",
      producerName: "Body Plus International",
      producerLink: "producerLink",
      taste: "taste1",
      priceWithoutTax: 1,
      priceOneOfPretein: 2,
      remarks: "remarks1"
    },
    {
      name: "Isocore Black Ops",
      producerName: "Body Plus International",
      producerLink: "producerLink",
      taste: "taste1",
      priceWithoutTax: 1,
      priceOneOfPretein: 2,
      remarks: "remarks1"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
