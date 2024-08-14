import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByPlaceholder("Add a new task").click();
  await page.getByPlaceholder("Add a new task").fill("wash the dishes");
  await page.getByRole("button", { name: "ADD", exact: true }).click();
  await page.getByPlaceholder("Add a new task").click();
  await page.getByPlaceholder("Add a new task").fill("wash the car");
  await page.getByRole("button", { name: "ADD", exact: true }).click();
  await page.getByPlaceholder("Add a new task").click();
  await page.getByPlaceholder("Number of API Tasks").click();
  await page.getByPlaceholder("Number of API Tasks").fill("3");
  await page.getByRole("button", { name: "Add API Tasks" }).click();
  await page.getByText("Watch a classic movieDelete").click();
  await page.getByText("wash the car").click();
  await page.getByText("Do something nice for someone").click();
  await page
    .locator("li")
    .filter({ hasText: "Memorize a poemDelete" })
    .getByRole("button")
    .click();
  await page.getByRole("button", { name: "Delete API Tasks" }).click();
  await page.getByRole("button", { name: "Delete Manual Tasks" }).click();
  await page.getByPlaceholder("Number of API Tasks").click();
  await page.getByPlaceholder("Number of API Tasks").fill("5");
  await page.getByRole("button", { name: "Add API Tasks" }).click();
  await page.getByPlaceholder("Add a new task").click();
  await page.getByPlaceholder("Add a new task").fill("Download Adobe Acrobat");
  await page.getByRole("button", { name: "ADD", exact: true }).click();
  await page.getByText("Download Adobe AcrobatDelete").click();
  await page
    .locator("li")
    .filter({ hasText: "Invest in cryptocurrencyDelete" })
    .getByRole("checkbox")
    .check();
  await page
    .locator("li")
    .filter({ hasText: "Memorize a poemDelete" })
    .getByRole("checkbox")
    .check();
  await page
    .locator("li")
    .filter({ hasText: "Watch a classic movieDelete" })
    .getByRole("checkbox")
    .check();
  await page
    .locator("li")
    .filter({ hasText: "Do something nice for someone" })
    .getByRole("checkbox")
    .check();
  await page
    .locator("li")
    .filter({ hasText: "Watch a documentaryDelete" })
    .getByRole("checkbox")
    .check();
  await page.getByRole("button", { name: "Delete All Tasks" }).click();
});
