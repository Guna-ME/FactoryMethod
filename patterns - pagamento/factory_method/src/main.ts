import { PaymentFactory } from "./PaymentFactory";

const paymentMethod = "creditCard"; 
const payment = PaymentFactory.createPaymentMethod(paymentMethod);

payment.processPayment(100.00);