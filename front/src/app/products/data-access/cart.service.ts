import { Injectable, signal } from '@angular/core';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class CartService {

    private cartItems = signal<Product[]>([]);

    addToCart(product: Product): void {
        this.cartItems.set([...this.cartItems(), product]);
    }

    getCartItems(): Product[] {
        return this.cartItems();
    }

    getTotalItems(): number {
        return this.cartItems().length;
    }

    removeItem(product: Product): void {
        this.cartItems.set(this.cartItems().filter(item => item.id !== product.id));
    }

    clearCart(): void {
        this.cartItems.set([]);
    }
}