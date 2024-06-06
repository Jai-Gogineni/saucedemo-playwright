import { Locator, Page, expect } from "@playwright/test";

export class CartPage {
  private page: Page;
  cartBadge: Locator;
  itemsCount: Locator;
  removeButton: Locator;
  itemNames: Locator;
  price: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartBadge = page.locator('[data-test="shopping-cart-link"]');
    this.itemsCount = page.locator('[data-test="item-quantity"]');
    this.removeButton = page.locator('[id="remove-sauce-labs-fleece-jacket"]');
    this.itemNames = page.locator('.cart_item_label [data-test="inventory-item-name"]');
    this.price = page.locator('[data-test="inventory-item-price"]');
  }

  async removeButtonIsEnabled() {
    await expect(this.removeButton).toBeVisible();
  }

  async clickOnCart() {
    await this.cartBadge.click();
  }
}
