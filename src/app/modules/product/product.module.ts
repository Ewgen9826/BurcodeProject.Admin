import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductItemComponent } from "./components/product-item/product-item.component";
import { ProductRoutingModule } from "./product-routing.module";
import { SharedModule } from "../../../app/shared/shared.module";
import { ProductsComponent } from './containers/products/products.component';
import { ProductItemAddComponent } from './components/product-item-add/product-item-add.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [ProductListComponent, ProductItemComponent, ProductsComponent, ProductItemAddComponent, FilterComponent],
  imports: [CommonModule, ProductRoutingModule, SharedModule]
})
export class ProductModule {}
