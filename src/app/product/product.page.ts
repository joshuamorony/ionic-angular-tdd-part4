import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { ProductsService } from "../services/products.service";
import { WishlistService } from "../services/wishlist.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.page.html",
  styleUrls: ["./product.page.scss"]
})
export class ProductPage implements OnInit {
  constructor(
    public navCtrl: NavController,
    public productsService: ProductsService,
    public wishlistService: WishlistService
  ) {}

  ngOnInit() {
    this.productsService.load();
  }

  launchWishlist() {
    this.navCtrl.navigateForward("wishlist");
  }

  addToWishlist(product) {
    this.wishlistService.addProduct(product);
  }
}
