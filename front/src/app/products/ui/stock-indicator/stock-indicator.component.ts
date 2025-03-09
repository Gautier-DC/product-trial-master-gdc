import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stock-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-indicator.component.html',
  styleUrl: './stock-indicator.component.css'
})
export class StockIndicatorComponent {
  @Input() inventoryStatus: "INSTOCK" | "LOWSTOCK" | "OUTOFSTOCK" = 'INSTOCK';

  get inventoryInfo() {
    switch (this.inventoryStatus){
      case "INSTOCK":
        return { label: "En stock", class: "text-green-400", icon: "✅" };
      case "LOWSTOCK":
        return { label: "Derniers exemplaires", class: "text-orange-500", icon: "⚠️" };
      case "OUTOFSTOCK":
        return { label: "Épuisé", class: "text-red-500", icon: "❌" };
      default:
        return { label: "Inventaire en cours", class: "text-gray-500", icon: "📋" };
    }
  }
}
