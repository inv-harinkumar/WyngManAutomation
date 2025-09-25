import { Locator, Page } from "@playwright/test";

export class LoginPage {

    readonly page: Page;
    readonly emailInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator
    readonly forgotPasswordLink: Locator


    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByRole('textbox', { name: 'email' });
        this.passwordInput = page.getByRole('textbox', { name: 'password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot Password?' });
    }

    async gotoLogin() {
        await this.page.goto('/');
    }
    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

}
