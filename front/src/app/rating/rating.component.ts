import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
 @Input() rating: number = 0;
 readonly totalStars = 5;

 get fullStars(): number[] {
   return Array(this.rating).fill(0);
 }

  get emptyStars(): number[] {
    return Array(this.totalStars - this.rating).fill(0);
  }
}
