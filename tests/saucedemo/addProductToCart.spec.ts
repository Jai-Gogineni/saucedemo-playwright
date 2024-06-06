import { expect, test } from "@playwright/test";
import { CartPage } from "../../pages/cart";
import { InventoryPage } from "../../pages/inventory";
import { LoginPage } from "../../pages/login";
test.describe("Select the highest price item in product listing page and add to cart", () => {
  test("Navigates to SauceDemo", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Swag Labs/);
  });

  test("Can [standard_user]  login to sauce_demo", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });

  test("Can user selects highest prices item in inventory", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.clickAddToCartForHighestPricedItem();
    await expect(inventoryPage.removeButton).toBeVisible();
  });

  test("Verify highest product in inventory has been added to cart", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.clickAddToCartForHighestPricedItem();
    const higherstPriceItemName = await inventoryPage.getHighestPriceItemName();
    const highestPricedItemInInventory = await inventoryPage.getHighestPriceItem();
    await cartPage.clickOnCart();

    const itemName = await cartPage.itemNames.innerText();
    await expect(itemName).toEqual(higherstPriceItemName);

        
    const itemPrice = await cartPage.price.innerText();
    await expect(itemPrice).toEqual(highestPricedItemInInventory);
  });
});
