import { Component, OnInit } from "@angular/core";
import { WishlistService } from "../services/wishlist.service";

@Component({
  selector: "app-wishlist",
  templateUrl: "./wishlist.page.html",
  styleUrls: ["./wishlist.page.scss"]
})
export class WishlistPage implements OnInit {
  constructor(public wishlistService: WishlistService) {}

  ngOnInit() {}

  deleteFromWishlist(product) {
    this.wishlistService.deleteProduct(product);
  }
}
