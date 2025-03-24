import { NotificationFactory } from "./NotificationFactory";

const notificationType1 = "email";
const notification1 = NotificationFactory.createNotification(notificationType1);
notification1.send("Este é um alerta importante!");

const notificationType2 = "sms";
const notification2 = NotificationFactory.createNotification(notificationType2);
notification2.send("Este é um alerta por SMS!");