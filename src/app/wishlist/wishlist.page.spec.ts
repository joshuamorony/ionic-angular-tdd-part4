import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed, inject } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { WishlistPage } from "./wishlist.page";
import { WishlistService } from "../services/wishlist.service";
import { WishlistMock } from "../../mocks";

describe("WishlistPage", () => {
  let comp: WishlistPage;
  let fixture: ComponentFixture<WishlistPage>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WishlistPage],
      providers: [
        {
          provide: WishlistService,
          useClass: WishlistMock
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistPage);
    comp = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
    comp = null;
    de = null;
    el = null;
  });

  it("should create", () => {
    expect(comp).toBeTruthy();
  });

  it("should display all products contained in wishlist", () => {
    let wishlistService = fixture.debugElement.injector.get(WishlistService);

    fixture.detectChanges();

    de = fixture.nativeElement.getElementsByTagName("h3");

    wishlistService.products.forEach((product, index) => {
      el = de[index];
      expect(el.innerHTML).toContain(product.title);
    });
  });

  it("should make a call to remove a prouct from wishlist when delete button clicked", () => {
    let wishlistService = fixture.debugElement.injector.get(WishlistService);
    spyOn(wishlistService, "deleteProduct");

    let firstWishlistProduct = wishlistService.products[0];

    fixture.detectChanges();

    de = fixture.debugElement.query(By.css("ion-item-sliding ion-button"));
    de.triggerEventHandler("click", null);

    expect(wishlistService.deleteProduct).toHaveBeenCalledWith(firstWishlistProduct);
  });
});
