import { Component, Input } from "@angular/core";

@Component({
  selector: "app-rating",
  standalone: true,
  imports: [],
  templateUrl: "./rating.component.html",
  styleUrl: "./rating.component.css",
})
export class RatingComponent {
  @Input() rating: number = 0;
  readonly totalStars = 5;

  get fullStars(): number[] {
    return Array.from({ length: this.rating }, (_, i) => i);
  }

  get emptyStars(): number[] {
    return Array.from({ length: 5 - this.rating }, (_, i) => i + this.rating);
  }
}
