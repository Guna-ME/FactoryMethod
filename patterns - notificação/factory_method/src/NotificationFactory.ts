import { Notification } from "./Notification";
import { EmailNotification } from "./EmailNotification";
import { SMSNotification } from "./SMSNotification";

export class NotificationFactory {
    static createNotification(notificationType: string): Notification {
        if (notificationType === "email") {
            return new EmailNotification();
        } else if (notificationType === "sms") {
            return new SMSNotification();
        } else {
            throw new Error("Tipo de notificação inválido");
        }
    }
}