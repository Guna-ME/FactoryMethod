import { Payment } from "./Payment";

export class CreditCardPayment implements Payment {
    processPayment(amount: number): void {
        console.log(`Pagando R$${amount} com cartão de crédito.`);
    }
}