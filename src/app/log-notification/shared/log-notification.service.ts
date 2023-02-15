import { Injectable } from '@angular/core';
import {Filter, HttpParamModel, HttpService, Pagination} from "astrapay-starter";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LogNotification} from "./log-notification.model";
import {environment} from "../../../environments/environment";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LogNotificationService extends HttpService {

  url: string = environment.notificationBaseUrl
  smsQueUrl = this.url + "/admin/sms-queues";
  emailQueUrl = this.url + "/admin/email-queues";

  constructor(protected httpClient: HttpClient) {
    super(httpClient)
  }

  getSms(pagination: Pagination, filters?: Filter[]): Observable<LogNotification[]> {
    let httpParamModel: HttpParamModel = new HttpParamModel();
    httpParamModel.setAll(pagination.toMap())
    this.generateFilters(httpParamModel, filters)
    return this.httpClient.get<LogNotification[]>(this.smsQueUrl,  {params: httpParamModel.toHttpParams()})
      .pipe(catchError(this.errorHandler));
  }

  getEmail(pagination: Pagination, filters?: Filter[]): Observable<LogNotification[]> {
    let httpParamModel: HttpParamModel = new HttpParamModel();
    httpParamModel.setAll(pagination.toMap())
    this.generateFilters(httpParamModel, filters)
    return this.httpClient.get<LogNotification[]>(this.emailQueUrl,  {params: httpParamModel.toHttpParams()})
      .pipe(catchError(this.errorHandler));
  }
}
