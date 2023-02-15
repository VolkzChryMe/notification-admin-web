import {LogNotificationAdditional} from "./log-notification-additional.model";

export interface LogNotification {
  id?: number,
  email?: string,
  phoneNumber?: string,
  idTemplate?: string,
  idSubjectTemplate?: string,
  status?: string,
  errorMessage?: string,
  retry?: number,
  createdAt?: Date,
  updatedAt?: Date,
  additional?: LogNotificationAdditional[]
}
