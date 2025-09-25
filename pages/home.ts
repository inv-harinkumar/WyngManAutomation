import {Page, Locator} from "@playwright/test"


export class HomePage {
    readonly page: Page;
    readonly headerLogo: Locator;
    readonly profileIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headerLogo = page.getByRole('img', { name: 'dashboard_logo' });
        this.profileIcon = page.locator('button:has(svg[data-testid="PersonOutlineOutlinedIcon"])');
    }

}