import {Component, Input, OnInit} from '@angular/core';
import {LogNotification} from "../shared/log-notification.model";
import {Filter, Pagination, PaginationDataSourceService} from "astrapay-starter";
import {Observable} from "rxjs";
import {LogNotificationService} from "../shared/log-notification.service";
import {PageEvent} from "@angular/material/paginator";
import {Sort} from "@angular/material/sort";

@Component({
  selector: 'log-notification-sms-table',
  templateUrl: './log-notification-sms-table.component.html',
  styleUrls: ['./log-notification-sms-table.component.css']
})
export class LogNotificationSmsTableComponent implements OnInit {
  @Input() logNotification: LogNotification = {
    phoneNumber: ''
  }

  displayedColumns: string[] = [
    'createdAt',
    'message',
    'phoneNumber',
    'status'
  ]

  filters?: Filter[]
  dataSource: PaginationDataSourceService<LogNotification>
  pagination: Pagination = new Pagination()
  getSms: (pagination: Pagination, filters?: Filter[]) => Observable<LogNotification[]>

  constructor(private service: LogNotificationService) {
  }

  ngOnInit(): void {
    this.dataSource = new PaginationDataSourceService()
    this.pagination.sort = {"active": "createdAt", "direction": "desc"}
    // this.onFilter(this.transaction)
    if (localStorage.getItem('filter') == undefined || localStorage.getItem('filter') == null) {
      this.onFilter(this.logNotification)
    } else {
      this.onFilter(JSON.parse(localStorage.getItem('filter')));
    }
  }

  onFilter(logNotification: LogNotification) {
    let filters: Filter[] = []
    filters.push({field: "phoneNumber", operator: '', value: logNotification.phoneNumber})
    this.filters = filters
    this.onRefreshTable(filters)
  }

  onRefreshTable(filters?: Filter[]) {
    this.getSms = (pagination: Pagination, filters?: Filter[]) => {
      return this.service.getSms(pagination, filters)
    }
    this.dataSource.load(this.getSms, this.pagination, filters)
    // if (this.isSourceOfFundPoint) {
    //   this.isLoadingSumTransactionAmount.next(true)
    //   this.service.getSumTransactionAmount(this.filters)
    //     .subscribe(data => {
    //       this.sumTransactionAmount = data.total
    //     }, () => this.sumTransactionAmount = 0)
    //     .add(() => this.isLoadingSumTransactionAmount.next(false))
    //
    // }
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
