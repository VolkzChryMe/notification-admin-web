import {Component, Input, OnInit} from '@angular/core';
import {LogNotification} from "../shared/log-notification.model";
import {Filter, Pagination, PaginationDataSourceService} from "astrapay-starter";
import {Observable} from "rxjs";
import {LogNotificationService} from "../shared/log-notification.service";
import {PageEvent} from "@angular/material/paginator";
import {Sort} from "@angular/material/sort";

@Component({
  selector: 'log-notification-email-table',
  templateUrl: './log-notification-email-table.component.html',
  styleUrls: ['./log-notification-email-table.component.css']
})
export class LogNotificationEmailTableComponent implements OnInit {
  @Input() logNotification: LogNotification = {
    email: ''
  }

  displayedColumns: string[] = [
    'createdAt',
    'email',
    'status'
  ]

  filters?: Filter[]
  dataSource: PaginationDataSourceService<LogNotification>
  pagination: Pagination = new Pagination()
  getEmail: (pagination: Pagination, filters?: Filter[]) => Observable<LogNotification[]>

  constructor(private service: LogNotificationService) {
  }

  ngOnInit(): void {
    this.dataSource = new PaginationDataSourceService()
    this.pagination.sort = {"active": "createdAt", "direction": "desc"}
    if (localStorage.getItem('filter') == undefined || localStorage.getItem('filter') == null) {
      this.onFilter(this.logNotification)
    } else {
      this.onFilter(JSON.parse(localStorage.getItem('filter')));
    }
  }

  onFilter(logNotification: LogNotification) {
    let filters: Filter[] = []
    filters.push({field: "email", operator: '', value: logNotification.email})
    this.filters = filters
    this.onRefreshTable(filters)
  }

  onRefreshTable(filters?: Filter[]) {
    this.getEmail = (pagination: Pagination, filters?: Filter[]) => {
      return this.service.getEmail(pagination, filters)
    }
    this.dataSource.load(this.getEmail, this.pagination, filters)
  }

  onPagination(pageEvent: PageEvent) {
    this.pagination.pageNumber = pageEvent.pageIndex
    this.pagination.pageSize = pageEvent.pageSize
    this.onRefreshTable(this.filters)
  }

  onSortChange(sort: Sort) {
    this.pagination.sort = sort
    this.onRefreshTable(this.filters)
  }
}
