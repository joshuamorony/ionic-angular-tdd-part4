import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { NavController } from "@ionic/angular";
import { NavMock } from "../../mocks";

import { ProductsService } from "../services/products.service";
import { ProductsMock } from "../../mocks";
import { WishlistService } from "../services/wishlist.service";
import { WishlistMock } from "../../mocks";

import { ProductPage } from "./product.page";

describe("Page: Product Page", () => {
  let comp: ProductPage;
  let fixture: ComponentFixture<ProductPage>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductPage],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ProductsService,
          useClass: ProductsMock
        },
        {
          provide: WishlistService,
          useClass: WishlistMock
        },
        {
          provide: NavController,
          useClass: NavMock
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPage);
    comp = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
    comp = null;
    de = null;
    el = null;
  });

  it("is created", () => {
    expect(fixture).toBeTruthy();
    expect(comp).toBeTruthy();
  });

  it("displays products containing a title, description, and price in the list", () => {
    let productsService = fixture.debugElement.injector.get(ProductsService);
    let firstProduct = productsService.products[0];

    fixture.detectChanges();

    de = fixture.debugElement.query(By.css("ion-card"));
    el = de.nativeElement;

    expect(el.textContent).toContain(firstProduct.title);
    expect(el.textContent).toContain(firstProduct.description);
    expect(el.textContent).toContain(firstProduct.price);
  });

  it("should be able to launch wishlist page", () => {
    let navCtrl = fixture.debugElement.injector.get(NavController);
    spyOn(navCtrl, "navigateForward");

    de = fixture.debugElement.query(By.css("ion-buttons ion-button"));

    de.triggerEventHandler("click", null);

    expect(navCtrl.navigateForward).toHaveBeenCalledWith("wishlist");
  });

  it("should add product to wishlist when add to wishlist button clicked", () => {
    let wishlistService = fixture.debugElement.injector.get(WishlistService);
    spyOn(wishlistService, "addProduct");

    let productsService = fixture.debugElement.injector.get(ProductsService);
    let firstProduct = productsService.products[0];

    fixture.detectChanges();

    de = fixture.debugElement.query(By.css("ion-card ion-button"));
    de.triggerEventHandler("click", null);

    expect(wishlistService.addProduct).toHaveBeenCalledWith(firstProduct);
  });
});
