import { Payment } from "./Payment";

export class PayPalPayment implements Payment {
    processPayment(amount: number): void {
        console.log(`Pagando R$${amount} com PayPal.`);
    }
}