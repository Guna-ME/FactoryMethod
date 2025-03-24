import { Payment } from "./Payment";
import { CreditCardPayment } from "./CreditCardPayment";
import { PayPalPayment } from "./PayPalPayment";
import { BoletoPayment } from "./BoletoPayment";

export class PaymentFactory {
    static createPaymentMethod(paymentType: string): Payment {
        if (paymentType === "creditCard") {
            return new CreditCardPayment();
        } else if (paymentType === "paypal") {
            return new PayPalPayment();
        } else if (paymentType === "boleto") {
            return new BoletoPayment();
        } else {
            throw new Error("Método de pagamento inválido");
        }
    }
}