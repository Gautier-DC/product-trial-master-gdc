import { Component, inject } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SplitterModule } from "primeng/splitter";
import { ToolbarModule } from "primeng/toolbar";
import { PanelMenuComponent } from "./shared/ui/panel-menu/panel-menu.component";
import { CartService } from "app/products/data-access/cart.service";
import { Product } from "app/products/data-access/product.model";
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [RouterModule, SplitterModule, ToolbarModule, PanelMenuComponent, ButtonModule, DialogModule],
})
export class AppComponent {
  title = "ALTEN SHOP";

  public cartService = inject(CartService);
  public isCartVisible = false;
  onAddToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  onRemoveFromCart(product: Product) {
    this.cartService.removeItem(product);
  }

  toggleCart() {
    this.isCartVisible = !this.isCartVisible;
  }
}
