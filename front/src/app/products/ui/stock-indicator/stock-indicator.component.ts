import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { TagModule } from "primeng/tag";

export type Severity =
  | "success"
  | "warning"
  | "danger"
  | "secondary"
  | "info"
  | "contrast";
@Component({
  selector: "app-stock-indicator",
  standalone: true,
  imports: [CommonModule, TagModule],
  templateUrl: "./stock-indicator.component.html",
  styleUrl: "./stock-indicator.component.css",
})
export class StockIndicatorComponent {
  @Input() inventoryStatus: "INSTOCK" | "LOWSTOCK" | "OUTOFSTOCK" = "INSTOCK";

  get inventoryInfo(): { label: string; severity: Severity; icon: string } {
    switch (this.inventoryStatus) {
      case "INSTOCK":
        return { label: "En stock", severity: "success", icon: "pi-check" };
      case "LOWSTOCK":
        return {
          label: "Derniers exemplaires",
          severity: "warning",
          icon: "pi-exclamation-triangle",
        };
      case "OUTOFSTOCK":
        return { label: "Épuisé", severity: "danger", icon: "pi-times" };
      default:
        return {
          label: "Inventaire en cours",
          severity: "secondary",
          icon: "pi-search",
        };
    }
  }
}
