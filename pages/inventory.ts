import { Locator, Page, expect } from "@playwright/test";

export class InventoryPage {
  private page: Page;
  private cartItems: Locator;
  private cartNames: Locator;
          removeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartNames = page.locator('[data-test="inventory-item-name"]');
    this.cartItems = page.locator('[data-test="inventory-item-price"]');
    this.removeButton = page.locator(
      '[data-test="remove-sauce-labs-fleece-jacket"]'
    );
  }

  private async getItemPrices(): Promise<number[]> {
    const itemPriceElements = await this.cartItems.allInnerTexts();
    const itemPrices = itemPriceElements.map((price) =>
      parseFloat(price.replace("$", ""))
    );
    return itemPrices;
  }

  async getHighestPriceItem() {
    const itemPrices = await this.getItemPrices();
    const highestPricedItem = Math.max(...itemPrices);

    return "$" + highestPricedItem.toString();
  }

  async getHighestPriceItemName(): Promise<string> {
    const itemNameElements = await this.cartNames.allInnerTexts();
    const itemNames = await Promise.all(itemNameElements);

    const itemPrices = await this.getItemPrices();
    const highestPrice = Math.max(...itemPrices);
    const highestPricedItemIndex = itemPrices.indexOf(highestPrice);
    const highestPricedItemName = itemNames[highestPricedItemIndex];

    return highestPricedItemName;
  }

  async clickAddToCartForHighestPricedItem() {
    const highestPricedItemName = await this.getHighestPriceItemName();
    const addToCartButton = this.page.locator(
      `[data-test="add-to-cart-${highestPricedItemName
        .toLowerCase()
        .replace(/ /g, "-")}"]`
    );

    await addToCartButton.click();
  }
}
