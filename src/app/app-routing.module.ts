import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "product", pathMatch: "full" },
  { path: "home", loadChildren: () => import("./home/home.module").then(m => m.HomePageModule) },
  { path: "product", loadChildren: "./product/product.module#ProductPageModule" },
  { path: 'wishlist', loadChildren: './wishlist/wishlist.module#WishlistPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
