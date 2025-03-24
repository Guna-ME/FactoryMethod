import { Payment } from "./Payment";

export class BoletoPayment implements Payment {
    processPayment(amount: number): void {
        console.log(`Gerando boleto de R$${amount}.`);
    }
}